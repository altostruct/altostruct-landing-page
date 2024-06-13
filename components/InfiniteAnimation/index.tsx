import { ReactNode } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

function InfiteAnimation(props: { className?: string, children: ReactNode[] }) {
    const { children, className } = props;
    return <div className={classNames(styles.slider, className)}>
        <div className={styles.content}>
            {children.map((child, index) => {
                return <div key={index} className={styles.item}>
                    {child}
                </div>
            })}
            {children.map((child, index) => {
                return <div key={index + "_copy"} className={styles.item}>
                    {child}
                </div>
            })}

            {/* <span className={styles.copies}>
                {children}
            </span> */}
        </div>
    </div>
}

export default InfiteAnimation