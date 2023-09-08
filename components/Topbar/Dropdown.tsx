import React, { ReactNode, HTMLAttributes } from "react";
import classNames from "classnames";
import { Underline } from "./Topbar";


interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode[];
    icon?: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children,icon, className, ...rest }) => {
    return (
        <div className={classNames(className, "relative group")} {...rest}>
            <div className="flex flex-row items-center gap-2">
                <div className="w-4">{icon}</div>
                <div>{title}</div>
            </div>
            <div className="p-2 hidden group-hover:flex absolute flex-col -right-4 top-full ">
                <div className={"w-96 flex gap-2 px-4 p-2 flex-col rounded-lg  bg-[#1f1f1f]"}>
                    {children?.map((el, index) => {
                        return <div className="group" key={index}>
                            {el}
                        </div>
                    })}

                </div>
            </div>

        </div>
    );
};

export default Dropdown;