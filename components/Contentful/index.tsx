import Image from "@components/Image";
import { ImageProps } from "next/image";

export function ContentfulImage(
  props: { image: any } & Omit<ImageProps, "src" | "height" | "width"> &
    Partial<{
      height?: number;
      width: number;
    }>
) {
  const { image, height, width, ...rest } = props;
  if (!image?.fields?.file) return <></>

  const ext = image.fields.file.contentType.split("/")[1];
  const imageUrl = "/images/contentful/" + image.sys.id + "." + ext;

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      height={
        height ||
        image.fields.details?.image.height ||
        image.fields?.file.details.image?.height || 1
      }
      width={
        width ||
        image.fields.details?.image.width ||
        image.fields?.file.details.image?.width || 1
      }
      src={imageUrl}
      className="w-full"
      style={{
        objectFit: "cover",
      }}
      {...rest}
    />
  );
}
