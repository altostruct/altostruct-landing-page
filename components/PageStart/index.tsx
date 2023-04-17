import { PropsWithChildren, ReactNode } from "react";

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
}

function PageStart(props: PageStartProps) {
  const { title, description } = props;
  return (
    <div className="h-screen flex pb-32">
      <div className="mt-auto  md:text-left text-center text-white md:w-3/4">
        <p className="mb-3  text-3xl md:text-6xl text-left md:w-3/4">{title}</p>
        <p>{description}</p>
        {/* <p className="mt-5 mb-72 text-left"></p> */}
      </div>
    </div>
  );
}

export default PageStart;
