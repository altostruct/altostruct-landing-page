import React, { ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Dropdown.module.scss";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children, className, ...rest }) => {
    return (
        <div className={classNames(styles.dropdown, className, "p-3")} {...rest}>
            <div>{title}</div>
            <div className={styles["dropdown-content"]}>
                {children}
            </div>

        </div>
    );
};

export default Dropdown;