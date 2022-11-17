import dynamic from "next/dynamic";
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
