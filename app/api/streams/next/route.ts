import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(){
    const sesssion = await getServerSession();
    const user = await prismaClient.user.findFirst({
        where:{
            email:sesssion?.user?.email??""
        }
    })
    console.log("Control is in api/streams/next")
    if(!user){
        console.log(user)
        console.log("Error Here")
        return NextResponse.json({
            message:"Unauthenticated"
        },{
            status:403
        })
    }
    const mostUpvotedStream =await prismaClient.stream.findFirst({
        where:{
            userId:user.id,
            played:false,
        },
        orderBy:{
            upvotes:{
                _count:"desc"
            }
        }
    })

    await Promise.all([prismaClient.currentStream.upsert({
        where:{
            userId:user.id,
        },update:{
            userId:user.id,
            streamId:mostUpvotedStream?.id

        },
        create:{
            userId:user.id,
            streamId:mostUpvotedStream?.id
        }

    }), prismaClient.stream.update({
        where:{
            id:mostUpvotedStream?.id??""
        },
        data:{
            played:true,
            playedTs:new Date()
        }
    })

])

return NextResponse.json({
    stream:mostUpvotedStream
})

}