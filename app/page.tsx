
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Play, Users, Zap } from 'lucide-react'
import { Appbar } from './components/Appbar'
import { Redirect } from './components/Redirect'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Appbar/>
      <Redirect/>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Let Your Fans Choose the Beat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Empower your audience to curate your live music stream. Connect with fans like never before.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-gray-900">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-400">Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Users className="h-12 w-12 text-blue-500" />
                <h3 className="text-xl font-bold text-blue-400">Fan-Driven Playlists</h3>
                <p className="text-sm text-gray-300 text-center">
                  Let your audience vote on and request songs for your stream
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Play className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-bold text-green-400">Live Streaming</h3>
                <p className="text-sm text-gray-300 text-center">
                  High-quality, low-latency streaming for the best live experience
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 rounded-lg bg-gray-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Zap className="h-12 w-12 text-yellow-500" />
                <h3 className="text-xl font-bold text-yellow-400">Real-time Interaction</h3>
                <p className="text-sm text-gray-300 text-center">
                  Chat, react, and engage with your audience in real-time
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-400">What People Are Saying</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-2 p-6 rounded-lg bg-gray-800 shadow-lg border border-purple-500">
                <p className="text-sm text-gray-300">
                  "This platform has revolutionized how I connect with my fans. They love choosing the music!"
                </p>
                <p className="font-bold text-purple-400">- Alex, Electronic Music Producer</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-gray-800 shadow-lg border border-blue-500">
                <p className="text-sm text-gray-300">
                  "I've discovered so many great artists and songs through this app. It's addictive!"
                </p>
                <p className="font-bold text-blue-400">- Sarah, Music Enthusiast</p>
              </div>
              <div className="space-y-2 p-6 rounded-lg bg-gray-800 shadow-lg border border-green-500">
                <p className="text-sm text-gray-300">
                  "The interaction with fans during streams is unparalleled. It's like a virtual concert every time."
                </p>
                <p className="font-bold text-green-400">- Mike, Indie Musician</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Ready to Transform Your Streams?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Join our community of creators and music lovers. Start your journey today!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-gray-100" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-purple-400" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 MusicStream Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

