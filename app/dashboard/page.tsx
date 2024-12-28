'use client'
import { useEffect, useState } from 'react';
import StreamView from '../components/StreamView'

const creatorId="d886197a-4d0d-419a-8dde-357b0114f58b"
export default function Home() {
  const [creatorId, setCreatorId] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("/api/user");
                const data = await response.json();
                setCreatorId(data.user?.id || null);
            } catch (e) {
                console.error("Error fetching user data:", e);
            } finally {
                setLoading(false);
            }
        }

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <StreamView creatorId={creatorId} playVideo={true} />;
}
