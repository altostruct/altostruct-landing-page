import Topbar from "@components/Topbar/Topbar"
import Script from "next/script"

function NewsLetter() {
    return <div className="flex w-screen h-screen">
        <Script id="form">
            {`
                (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                    ml('account', '691954');
            `}
        </Script>
        <Topbar></Topbar>
        <div className="m-auto gap-5 flex flex-col">
            <div className="ml-embedded" data-form="8P5g2R"></div>
        </div>
    </div>
}

export default NewsLetter