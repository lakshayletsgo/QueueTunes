'use client'
import { useEffect, useState } from 'react';
import StreamView from '../components/StreamView'
export default async function Component() {
  try {
      const data = await fetch("/api/user").then(res => res.json());

      return <StreamView creatorId={data.user.id} playVideo={true} />
  } catch(e) {
      return null
  }
}
export const dynamic = 'auto'