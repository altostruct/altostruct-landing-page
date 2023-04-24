import { ReactNode } from "react";

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
}

function PageStart(props: PageStartProps) {
  const { title, description } = props;
  return (
    <div className="flex w-full pb-12 " style={{ height: "100vh" }}>
      <div className="mt-auto md:w-2/3 text-white ">
        <h1 className="mb-3 w-full text-3xl md:text-7xl leading-tight md:leading-tight">
          {title}
        </h1>
        <p className="font-light">{description}</p>
      </div>
    </div>
  );
}

export default PageStart;
