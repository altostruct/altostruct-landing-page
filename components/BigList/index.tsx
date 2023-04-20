import useTranslation from "hooks/useTranslation";
import { ReactNode } from "react";
import styles from "./BigList.module.scss";

interface BigListProps {
    items: { title: string; description: string; image: string }[];
}

function BigList(props: BigListProps) {
    const { items } = props;

    return (
        <ul className={styles["big-list"]}>
            {items.map((item, index) => {
                const { title, description, image } = item;
                return (
                    <>
                        {/* <ul
                            key={index}
                            className="md:flex md:grid-cols-12 text-white items-center p-5 border-gray-500 border-b-[1px] mb-10"
                        >
                            <div className="md:flex hidden md:w-32 md:h-32 w-20 flex-0">
                                <div className="m-auto p-6">
                                    <img src={image} alt="" />
                                </div>
                            </div>
                            <div className="hidden md:flex md:col-span-11 flex-1 items-center ml-6 ">
                                <p className="text-4xl md:w-1/3">{title}</p>
                                <div className="md:w-2/4 w-full ml-auto flex gap-8">
                                    <p>{"0" + index + "."}</p>
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="md:hidden flex pb-2">
                                <div className="w-10 h-10">
                                    <img src={image} alt="" />
                                </div>
                                <p className="pl-5 text-md text-3xl pb-5">
                                    {title}
                                </p>
                            </div>
                            <p className="md:hidden">{description}</p>
                        </ul> */}
                        <li className={styles["big-list-item"]}>
                            <img src={image} alt="" className={styles.icon} />
                            <span className={`${styles.title} text-3xl`}>
                                {title}
                            </span>
                            <span
                                className={`${styles.index} hidden md:inline`}
                            >
                                0{index}.
                            </span>
                            <span className={`${styles.description} mt-2`}>
                                {description}
                            </span>
                        </li>
                    </>
                );
            })}
        </ul>
    );
}

export default BigList;
