import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
//@ts-ignore
import youtubesearchapi from "youtube-search-api"
import { YOUTUBE_REGEX } from "@/app/lib/utils";
import { getServerSession } from "next-auth";



const CreateStreamSchema = z.object({
    creatorId:z.string(),
    url:z.string(),
})
const MAX_QUEUE_LEN = 20
// let thumbnails = ["https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg","https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg"]
export async function POST(req:NextRequest){
    try{
        const session = await getServerSession();
        const user = await prismaClient.user.findFirst({
            where: {
                email: session?.user?.email ?? ""
            }
        });

        if (!user) {
            return NextResponse.json({
                message: "Unauthenticated"
            }, {
                status: 403
            });
        }
        const data = CreateStreamSchema.parse(await req.json());
        if(!data.url.trim){
            return NextResponse.json({
                message: "YouTube link cannot be empty"
            }, {
                status: 400
            });
        }
        console.log(data)
        const isYt = data.url.match(YOUTUBE_REGEX);
        if(!isYt){
            return NextResponse.json({
                message:"Wrong URL format"
            },{
                status:411,
            })
        }
        const extractedId = data.url.split("?v=")[1];
        console.log("This is the extracted id: "+extractedId)
        const res = await youtubesearchapi.GetVideoDetails(extractedId)
        console.log("This is the response from the youtubesearchapi ")
        console.log(res)
        console.log("This is the res.thumbnails : "+res.thumbnail)
        let thumbnails=[];
        if(res.thumbnail!=undefined){
             thumbnails = res.thumbnail.thumbnails

             thumbnails.sort((a:{width:number},b:{width:number})=>a.width<b.width?-1:1);
        }
        // console.log("This is the res. : "+res.thumbnail)

        const existingActiveStream = await prismaClient.stream.count({
            where:{
                userId:data.creatorId
            }
        })
        if(existingActiveStream>MAX_QUEUE_LEN){
            return NextResponse.json({
                message:"Already at the limit",
            },{
                status:411
            })

        }
        const stream=await prismaClient.stream.create({
            
            data:{
                userId:data.creatorId,
                url:data.url,
                extractedId:extractedId,
                type:"Youtube",
                title:res.title??"Can't find video",
                smallImg: thumbnails.length>0?((thumbnails.length>1?thumbnails[thumbnails.length-2].url:thumbnails[thumbnails.length-1].url)??"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg"):"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg",
                bigImg: thumbnails.length>0?(thumbnails[thumbnails.length-1].url??"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg"):"https://bloody-disgusting.com/wp-content/uploads/2017/08/pennywise-scary.jpg",

            }
        });
        return NextResponse.json({
            ...stream,
            hasUpvoted:false,
            upvotes:0,
        })
        
    }catch(e){
        console.log(e)
        return NextResponse.json({
            message:"Error while adding a stream"
        },{
            status:411,
        })
    }

}


export async function GET(req:NextRequest) {
    const creatorId = req.nextUrl.searchParams.get("creatorId")
    console.log("Creator Id Is: "+creatorId)
    const sesssion = await getServerSession();
    console.log(sesssion)
    const user = await prismaClient.user.findFirst({
        where:{
            email:sesssion?.user?.email??""
        }
    })
    if(!user){
        return NextResponse.json({
            message:"Unauthenticated"
        },{
            status:403
        })
    }
    if(!creatorId){
        return NextResponse.json({
            message:"Error"
        },{
            status:411
        })
    }
    const [stream,activeStream] = await Promise.all( [await prismaClient.stream.findMany({
        where:{
            userId:creatorId,
            played:false
        },
        include:{
            _count:{
                select:{
                    upvotes:true
                }
            },
            upvotes:{
                where:{

                    userId:user.id
                }
            }
        }
    }),prismaClient.currentStream.findFirst({
        where:{
            userId:creatorId
        },
        include:{
            stream:true
        }
    })])

    return NextResponse.json({
        streams:stream.map(({_count, ...rest})=>({
            ...rest,
            upvotes:_count.upvotes,
            haveUpvoted:rest.upvotes.length?true:false
        })),
        activeStream
    })
}