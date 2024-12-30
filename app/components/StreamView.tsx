'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronUp, ChevronDown, Share2, Play } from 'lucide-react'
import Image from 'next/image'
import { toast, Toaster } from 'react-hot-toast'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { YOUTUBE_REGEX } from '../lib/utils'
import { Appbar } from './Appbar'
// @ts-expect-error This is to bypass youtube-player
import YoutubePlayer from 'youtube-player'

type Video = {
            id: string,
            type: string,
            url: string,
            extractedId: string,
            title: string,
            smallImg: string,
            bigImg: string,
            active: boolean,
            userId:string,
            upvotes: number,
            haveUpvoted:boolean
          }


const REFRESH_INTERVAL_MS = 10*1000
export default function StreamView({
    creatorId,
    playVideo=false
}:{
    creatorId:string
    playVideo:boolean
}) {
  const [videoUrl, setVideoUrl] = useState('')
  const [currentVideo,setCurrentVideo] = useState<Video | null>(null)
  const [queue, setQueue] = useState<Video[]>([])
  const[loading,setLoading] = useState(false)
  const [nextLoading,setNextLoading] = useState(false)
  const videoPlayerRef = useRef<HTMLDivElement>()


  async function refreshStreams (){
    try{
      console.log("Creator Id in stream view is:  "+creatorId)
      const res = await fetch(`/api/streams/?creatorId=${creatorId}`,{
      method:"GET",
      credentials:"include"
    })



    const json = await res.json()
    if (json.streams && Array.isArray(json.streams)) {
        setQueue(json.streams.length > 0 
            ? json.streams.sort((a: Video, b: Video) => b.upvotes - a.upvotes)
            : [])
    } else {
        setQueue([])
    }
    setCurrentVideo( video=>{
      if(video?.id===json.activeStream?.stream?.id){
        return video
      }
      return json.activeStream?.stream||null
    }
      
      )
  }catch(e){
    console.log("Error in refreshing streams")
    console.log(e)
  }}



  useEffect(()=>{
    refreshStreams();
   setInterval(()=>{
        refreshStreams();

    },REFRESH_INTERVAL_MS)
  },[])


  useEffect(()=>{
    if(!videoPlayerRef.current){
      return
    }
    const player = YoutubePlayer(videoPlayerRef.current)
    player.loadVideoById(currentVideo?.extractedId)
    player.playVideo()
    function eventHandler(event:object){
      console.log(event)
      // @ts-expect-error It is different type
      if(event.data===0){
        playNext()
      }
    }
    player.on('stateChange',eventHandler)
    return()=>{
      player.destroy()
    }
    
  },[currentVideo,videoPlayerRef])

  const handleSubmit = async (e: React.FormEvent) => {
    try{setLoading(true)
    e.preventDefault()
    const res = await fetch("/api/streams/",{
      method:"POST",
      body:JSON.stringify({
        creatorId,
        url:videoUrl,
      })
    })
    setQueue([...queue, await res.json()])
    setVideoUrl('')
    setLoading(false)}catch(e){
      console.log("Error in submitting the link")
      console.log(e)
    }
  }

  const playNext= async ()=>{
    if(queue.length>0){
      try{
        setNextLoading(true)
        const data = await fetch('/api/streams/next',{
          method:"GET",
        })
        const json = await data.json()
        setCurrentVideo(json.stream)
        setQueue(q=>q.filter(x=>x.id!==json.stream?.id))
      }catch(e){
        console.log(e)
      }
      setNextLoading(false)
    }

  }
  const handleVote = (id: string, isUpVote:boolean) => {
    setQueue(queue?.map(video => 
      video.id === id ? { ...video,
         upvotes: isUpVote?video.upvotes+1:video.upvotes-1,  
         haveUpvoted:!video.haveUpvoted
        } : video
    ).sort((a, b) => b.upvotes - a.upvotes))

    fetch(`/api/streams/${isUpVote?"upvote":"downvote"}`,{
      method:"POST",
      body:JSON.stringify({
        streamId:id
      })
    })
  }

  const handleShare =  () => {
    const shareableLink = `${window.location.hostname}/creator/${creatorId}`
    navigator.clipboard.writeText(shareableLink).then(()=>{
      toast.success('Link copied to clipboard',{
        position:"top-right",
        duration:3000,
      })
    },(err)=>{
      console.log(err)
      toast.error('Failed to copy link. Try Again..',{
        position:"top-right",
        duration:3000
      })
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <Appbar/>
      <Toaster position="top-center" />

        <main className="flex justify-center flex-grow container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-7 max-w-screen-xl pt-1">
            <div className='col-span-4'>
          
              <div className="space-y-8">
                
                <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-4">Upcoming Songs</h2>
                  <ul className="space-y-4">
                    {queue.length<=0&&<p>No Upcomming Video Now</p>}
                    {queue?.map(video => (
                      <li key={video.id} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={video.smallImg}
                            alt={video.title}
                            
                            width={90}
                            height={68}
                            className="rounded"
                          />
                          <span className="font-medium">{video.title}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex flex-col items-center">
                          <Button variant="outline" size="sm" onClick={()=>(handleVote(video.id,video.haveUpvoted?false:true))}
                              className='flex items-center space-x-1 bg-gray-800 text-white border-gray-700 hover:bg-gray-700'
                            >
                              {video.haveUpvoted?<ChevronDown className='h-4 w-4'/>:<ChevronUp className='h-4 w-4'/>}


                            <span className="font-bold text-lg">{video.upvotes}</span>
                          </Button>
                            
                            
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
            <div className='col-span-3'>
              <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className='mb-5 flex flex-row justify-between w-full'>

                  <h2 className="text-2xl font-semibold mb-4">Add to Queue</h2>
                  <Button onClick={handleShare} className="bg-blue-600 hover:bg-blue-700">
                    <Share2 className="w-4 h-4 mr-2" />
                        Share Stream
                    </Button>
                </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      value={videoUrl}
                      onChange={(e)=>setVideoUrl(e.target.value)}
                      placeholder="Enter YouTube video URL"
                      className="w-full bg-gray-700 text-gray-100 border-gray-600 focus:border-blue-500"
                    />
                    <Button disabled={loading} onClick={handleSubmit}  type="submit" className="w-full bg-blue-600 hover:bg-blue-700">{loading?"Loading...":"Submit"}</Button>
                  </form>
                  {videoUrl && videoUrl.match(YOUTUBE_REGEX)&&!loading&&(
                    <div className="mt-4">
                      <div className="aspect-w-16 aspect-h-9">
                          <LiteYouTubeEmbed title="" id={videoUrl.split("?v=")[1]}/>
                      </div>
                    </div>
                  )}
                <h2 className="text-2xl font-semibold mb-4 mt-3">Now Playing</h2>
                <div className="aspect-w-16 aspect-h-9">
                  {currentVideo?(
                    <div>

                    {
                      playVideo?<>
                      {/* @ts-expect-error This is to bypass ref */}
                      <div ref={videoPlayerRef} className='w-full h-5/6'/>
                      </>
                    :<>
                      <img src={currentVideo.bigImg} className='w-full h-full object-cover rounded' alt='Img' />
                      <p className='mt-2 text-center font-semibold text-white'>{currentVideo.title}</p>
                    </>
                    }
                      </div>
                    
                  ):(
                    <p className=" text-center py-8 text-gray-400">No Video Playing</p>
                  )

                  }
                  
                 
                </div>
                {playVideo&&<Button disabled={nextLoading} onClick={playNext} className='w-full bg-blue-600 hover:bg-blue-700 text-white mt-2'>
                  <Play className='mr-2 h-4 w-4' />{loading?"Loading...":"Play Next"}
                </Button>}
              </section>
            </div>
            
        </div>
        </main>
      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; 2023 Stream Song Voter. All rights reserved.</p>
      </footer>
    </div>
  )
}

