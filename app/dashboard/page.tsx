'use client'
import StreamView from '../components/StreamView'
export default async function Component() {
  try {
      const data = await fetch("/api/user/",{
        method:"GET"
      }).then(res => res.json());

      return <StreamView creatorId={data.user.id} playVideo={true} />
  } catch(e) {
    console.log(e)
      return null
  }
}
export const dynamic = 'auto'