import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import {  NextResponse } from "next/server";

export async function GET(){
    const sesssion = await getServerSession();
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
    const stream = await prismaClient.stream.findMany({
        where:{
            userId:user.id
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
    })
    return NextResponse.json({
        streams:stream.map(({_count, ...rest})=>({
            ...rest,
            upvotes:_count.upvotes,
            haveUpvoted:rest.upvotes.length?true:false
        }))
    })
}