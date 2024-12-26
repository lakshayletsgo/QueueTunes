'use client'
import StreamView from '../components/StreamView'

const creatorId="7b4c3d74-d8a8-4662-b7b1-b8effef741c6"
export default function Home() {
  return <StreamView creatorId={creatorId} playVideo={true}/>
}

