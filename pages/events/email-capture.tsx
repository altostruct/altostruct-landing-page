import Topbar from "@components/Topbar/Topbar";
import { useRouter } from "next/router";
import { Content, Row } from "pages";
import { useEffect } from "react";

function EmailSuccess() {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.replace("/")
        }, 2000);
    }, [])

    return <div className="flex flex-col gap-24 my-48 relative">
        {/* <div className="absolute w-1 -translate-x-1/2 top-0 h-full border-2 border-green-600 border-dashed  left-[12vw] "></div>
    <div className="w-4 -translate-x-1/2 h-4 bg-black  rounded-full fixed left-[12vw]"></div> */}
        <Topbar></Topbar>
        <Content>
            <Row className="gap-">
                <div className="self-center flex-1 h-fit">
                    <h1 className="text-4xl bold md:text-6xl">
                        Vi hör av oss inom kort
                        <span className="text-green-500">.</span><br></br>
                    </h1>
                </div>
            </Row>
        </Content>
    </div >
}

export default EmailSuccess