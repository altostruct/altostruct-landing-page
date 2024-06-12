import ExportedImage, {ExportedImageProps} from "next-image-export-optimizer";


function Image(props: ExportedImageProps){
    return <ExportedImage {...props} basePath={process.env.NEXT_PUBLIC_BASE_PATH}></ExportedImage>
}

export default Image