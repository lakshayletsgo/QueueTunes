'use client'
import StreamView from '../components/StreamView'

const creatorId="d886197a-4d0d-419a-8dde-357b0114f58b"
export default function Home() {
  return <StreamView creatorId={creatorId} playVideo={true}/>
}

