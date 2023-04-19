import useTranslation from "hooks/useTranslation";
import { ReactNode } from "react";

interface BigListProps {
  items: { title: string; description: string; image: ReactNode }[];
}

function BigList(props: BigListProps) {
  const { items } = props;

  return (
    <li className="hidden md:block">
      {items.map((item, index) => {
        const { title, description, image } = item;
        return (
          <ul
            key={index}
            className="flex md:grid-cols-12 text-white items-center p-5 border-gray-500 border-b-[1px]"
          >
            <div className="w-32 flex h-32 flex-0">
              <div className="m-auto p-6">{image}</div>
            </div>
            <div className="flex col-span-11 flex-1 items-center ml-6 ">
              <p className="text-4xl w-1/3">{title}</p>
              <div className="w-2/4 ml-auto flex gap-8">
                <p>{"0" + index + "."}</p>
                <p>{description}</p>
              </div>
            </div>
          </ul>
        );
      })}
    </li>
  );
}

export default BigList;
