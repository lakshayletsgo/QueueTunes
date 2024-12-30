
import { prismaClient } from "@/app/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
export async function GET() {
    console.log("Error due to login credentials are missing")
    const session = await getServerSession();
    console.log(session)
    if (!session?.user?.email) {
        console.log("Yaha hai bsdka error")
        return NextResponse.json({
            message: "Unauthenticated",
        }, {
            status: 403,
        });
    }
    
    // TODO: You can get rid of the db call here 
    console.log("Email id is this in app/api/user/route.ts")
    console.log(session?.user?.email)
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
        })
    }
    return NextResponse.json({
        user:user
    });
}
// dont static render
export const dynamic = 'force-dynamic'