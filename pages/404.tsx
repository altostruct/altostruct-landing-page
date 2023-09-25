import Button from "@components/Button/Button"
import { useRouter } from "next/router"

function F0FPage() {
    const { asPath, } = useRouter()

    return <div className="h-screen flex w-screen">
        <div className="m-auto items-center flex flex-col gap-2">
            <h1 className="text-xl">Sidan hittades tyvärr inte...</h1>
            <Button link="/">Gå tillbaka</Button>
        </div>
    </div>
}

export default F0FPage