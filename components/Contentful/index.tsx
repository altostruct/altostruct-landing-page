import dynamic from "next/dynamic";
import Image, { ImageProps } from "next/image";
import { Suspense } from "react";
import Widget from "../../.data/contentful/react-widgets/1ahxR6s5OunkPD8HnPKxK1";

export function ContentfulCodeWidget(props: { id: string }) {
  const Dynamic = dynamic(
    () =>
      import(`../../.data/contentful/react-widgets/${props.id}`).then((v) => {
        console.log(v);
        return v.default;
      }),
    { ssr: false }
  );

  return (
    <Suspense>
      <Dynamic></Dynamic>
    </Suspense>
  );
}

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
