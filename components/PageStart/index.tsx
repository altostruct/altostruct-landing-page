import { ReactNode } from "react";

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
}

function PageStart(props: PageStartProps) {
  const { title, description } = props;
  return (
    <div className="flex md:pb-32 pb-64" style={{ height: "100svh" }}>
        <div className="mt-auto text-white ">
            <p className="mb-3 text-4xl md:text-7xl md:w-3/4 leading-tight md:leading-tight">
                {title}
            </p>
            <p className="font-light">{description}</p>
        </div>
    </div>
);
}

export default PageStart;
