import NoSSR from "@components/NoSSR"
import Measure from 'react-measure'

function TestPage() {
    return <div className="py-32 bg-red-500">
        <NoSSR>
            <Measure bounds>{(args) => {
                console.log(args)
                // return <div className="bg-green-500">My width is {contentRect.client?.width}px</div>
                return <p ref={args.measureRef}>asd</p>
            }}</Measure>
        </NoSSR>
    </div >
}

export default TestPage