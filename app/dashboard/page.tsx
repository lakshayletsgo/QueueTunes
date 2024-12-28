'use client'
import StreamView from '../components/StreamView'
export default async function Component() {
  try {
      const res = await fetch("/api/user/",{
        method:"GET",

      })
      const data = await res.json()
      console.log("Data in fetch from api/user: "+data)

      return <StreamView creatorId={data.user.id} playVideo={true} />
  } catch(e) {
    console.log("Error in parsing. The error is: ")
    console.log(e)
      return null
  }
}
export const dynamic = 'auto'