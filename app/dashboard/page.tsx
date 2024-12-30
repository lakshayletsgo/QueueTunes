"use client"
import { useEffect, useState } from 'react'
import StreamView from '../components/StreamView'

export default function Component() {
    const [creatorId, setCreatorId] = useState<string>("");
    const [loading, setLoading] = useState(true);

    async function fetchUserData() {
        try {
            console.log("Before fetch the data from the user ")
            const response = await fetch("/api/user",{
                method:"GET",
                // Error Can be here
                credentials:"include"
                });
                console.log(response)
                // console.log(response.body)
                const data = await response.json();
                console.log("Jsoned data:  "+data)
                setCreatorId(data.user?.id);
                console.log("Creator Id in dashboard: "+creatorId)
            } catch (e) {
                console.error("Error fetching user data:", e);
            } finally {
                setLoading(false);
            }
        }
        useEffect(() => { 

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return <StreamView creatorId={creatorId} playVideo={true} />;
}