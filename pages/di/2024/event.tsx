import SEO from "@components/SEO"
import Topbar from "@components/Topbar/Topbar"
import { useRouter } from "next/router"
import { Content } from "pages"
import { useEffect } from "react"
import { sendGAEvent } from '@next/third-parties/google'

function DIPage() {
    const router = useRouter();
    
    useEffect(()=>{
        (async () => {
            sendGAEvent("Events", "DI-QR-SCANNED");
            router.replace("/events/2024/cloud-and-ai-study-2024")
        })()
    }, [router]);

    return <>
        <Content className="flex w-screen h-screen">
            <h1 className="text-2xl m-auto">Redirecting...</h1>
        </Content>

    </>
}

export default DIPage