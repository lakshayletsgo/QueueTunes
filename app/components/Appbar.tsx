"use client";
// We need to add the session component in this so we need to wrap up the entire thing in a session provider. We can do it here or we can make a private class and make it wrap there so that we dont need to wrap it there
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Music } from 'lucide-react'

export  function Appbar() {
  const session = useSession()
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-xl font-bold text-purple-500">QueueTunes</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          
          { session.data?.user&&
                  <Button className='m-2 p-2 bg-none hover:text-purple-400 transition-colors' onClick={()=>signOut()}>Log Out</Button>
                }
                { !session.data?.user&&
                  <Button className='m-2 p-2 bg-none hover:text-purple-400 transition-colors' onClick={()=>signIn()}>Log In</Button>
                }
        </nav>
      </header>
    </div>
  )
}
