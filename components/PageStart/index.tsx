import { ReactNode } from "react";
import styles from "./index.module.scss"

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
}

function PageStart(props: PageStartProps) {
  const { title, description } = props;



  return (
    <div className={`flex md:pb-32 pb-64 ${styles.start}`} style={{height: "100svh"}}>
        <div className="mt-auto text-white ">
            <p className="mb-3 text-4xl md:text-7xl md:w-3/4 leading-tight md:leading-tight">
                {title}
            </p>
            <p className="font-light text-xl">{description}</p>
        </div>
    </div>
);
}

export default PageStart;
