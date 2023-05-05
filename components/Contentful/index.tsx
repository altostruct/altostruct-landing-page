import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import { Suspense } from "react";


export function ContentfulImage(
  props: { image: any } & Omit<ImageProps, "src" | "height" | "width"> &
    Partial<{
      height?: number;
      width: number;
    }>
) {
  const { image, height, width, ...rest } = props;
  const ext = image.fields.file.contentType.split("/")[1];

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      height={
        height ||
        image.fields.details?.image.height ||
        image.fields?.file.details.image.height
      }
      width={
        width ||
        image.fields.details?.image.width ||
        image.fields?.file.details.image.width
      }
      src={"/contentful/images/" + image.sys.id + "." + ext}
      className="w-full"
      style={{
        objectFit: "cover",
      }}
      {...rest}
    />
  );
}
