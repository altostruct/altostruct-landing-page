import classNames from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import useTranslation from "../../hooks/useTranslation";
import * as styles from "./style.module.scss";

interface CardProps {
  title: string;
  description: string;
  link?: string;
  image?: ReactNode;
  index?: number;
  className?: string;
  cols?: number;
  rows?: number;
  x?: number;
  y?: number;
  visible?: boolean;
  backgroundColor?: string;
}

interface CardGridProps {
  grid: CardProps[];
  cols?: number;
  animatedOnView?: boolean;
}

/**
 *
 * @param el [1, 2, 3, 4]
 * @param chunk 3
 *
 * @returns [[1,2], [3, 4]]
 */

function chunk<T>(elements: T[], chunk: number): T[][] {
  const output: T[][] = [];

  for (let i = 0; i < elements.length; i += chunk) {
    output.push(elements.slice(i, i + chunk));
  }

  return output;
}

function Card(props: CardProps) {
  const {
    title,
    backgroundColor,
    image,
    description,
    index = 0,
    cols = 0,
    visible,
    x = 0,
    link,
    y = 0,
    rows = 0,
    className,
  } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (ref.current) {
  //     if (!ref.current.animate) return;

  //     const { offsetLeft, offsetTop } = ref.current;
  //     ref.current.style.zIndex = (100 - index!).toString();
  //     const xAnimDuration = 0.4;
  //     const yAnimDuration = 0.4;
  //     const waitDuration = 0.1;
  //     const p = 0.1;

  //     ref.current.animate(
  //       [
  //         {
  //           transform: `translate(-${offsetLeft}px,  -${offsetTop}px)`,
  //           offset: 0,
  //         },
  //         {
  //           transform: `translate(0px,  -${offsetTop}px)`,
  //           offset: xAnimDuration * (x / cols),
  //         },
  //         {
  //           transform: `translate(0px,  -${offsetTop}px)`,
  //           offset: xAnimDuration + waitDuration + (p * x) / cols,
  //         },
  //         {
  //           transform: `translate(0px,  0px)`,
  //           offset:
  //             waitDuration +
  //             (p * x) / cols +
  //             xAnimDuration +
  //             yAnimDuration * (y / rows),
  //         },
  //         { transform: `translate(0px,  0px)`, offset: 1 },
  //       ],
  //       {
  //         duration: 1500,
  //         fill: "forwards",
  //       }
  //     );
  //     // ref.current.className = ref.current.className + " " + styles.animate;
  //   }
  // }, [ref.current]);

  const expand = () => {};

  return (
    <div
      onClick={expand}
      style={{ backgroundColor, opacity: visible ? 1 : 0 }}
      ref={visible ? ref : null}
      className={classNames(styles.card, className)}
    >
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.imageAndTitle}>
            <div className={styles.title}>
              <h3>{title}</h3>
              <div className={styles.description}>{description}</div>
              {link && (
                <div className={styles.link}>
                  <a className="text-blue-400">{t("Läs mer")}</a>
                </div>
              )}
            </div>
            {image && <div className={styles.image}>{image}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardGrid(props: CardGridProps) {
  const { cols = 3, grid, animatedOnView = false } = props;
  const [seen, setSeen] = useState(false);
  const rows = Math.ceil(grid.length / cols);

  return (
    <>
      <div
        style={{
          gridTemplateColumns: new Array(cols)
            .fill(
              `calc(${(100 / cols).toFixed(2) + "%"} - ${(cols - 1) / cols}em)`
            )
            .join(" "),
        }}
        className={styles.grid}
      >
        <ReactVisibilitySensor
          onChange={(s) => {
            if (!seen && s) setSeen(true);
          }}
          active={!seen}
          partialVisibility
        >
          {(ev) => {
            const { isVisible } = ev;

            return chunk(grid, cols).map((chunk, y) => {
              return chunk.map((cardProps, x, arr) => {
                return (
                  <Card
                    x={x}
                    y={y}
                    visible={isVisible || !animatedOnView}
                    cols={cols}
                    rows={rows}
                    index={x + y * cols}
                    {...cardProps}
                  />
                );
              });
            });
          }}
        </ReactVisibilitySensor>
      </div>
    </>
  );
}

export default CardGrid;
