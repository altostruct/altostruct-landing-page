import useTranslation from "hooks/useTranslation";
import { ReactNode } from "react";
import styles from "./BigList.module.scss";
import BorderedPanel from "@components/BorderedPanel";

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
            <li className={`${styles["big-list-item"]} text-lg`}>
              <img src={image} alt="" className={styles.icon} />
              <span className={`${styles.title} text-3xl`}>{title}</span>
              <span className={`${styles.description} mt-2 text-lg`}>
                {description}
              </span>
            </li>
            <hr className={`${styles.divider} border-gray-500`}></hr>
          </>
        );
      })}
    </ul>
  );
}

export default BigList;