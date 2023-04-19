import { PropsWithChildren, ReactNode } from "react";

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
}

function PageStart(props: PageStartProps) {
  const { title, description } = props;
  return (
    <div className="h-screen flex md:pb-32 pb-96">
      <div className="mt-auto text-white ">
        <p className="mb-3 text-4xl md:text-6xl md:w-3/4">{title}</p>
        <p className="text-xl">{description}</p>
        {/* <p className="mt-5 mb-72 text-left"></p> */}
      </div>
    </div>
  );
}

export default PageStart;
