import useTranslation from "hooks/useTranslation";
import { ReactNode } from "react";

interface BigListProps {
  items: { title: string; description: string; image: ReactNode }[];
}

function BigList(props: BigListProps) {
  const { items } = props;

  return (
    <li className="block">
      {items.map((item, index) => {
        const { title, description, image } = item;
        return (
          <ul
            key={index}
            className="md:flex md:grid-cols-12 text-white items-center p-5 border-gray-500 border-b-[1px] mb-20"
          >
            <div className="md:flex hidden md:w-32 md:h-32 w-20 flex-0">
              <div className="m-auto p-6">{image}</div>
            </div>
            <div className="hidden md:flex md:col-span-11 flex-1 items-center ml-6 ">
              <p className="text-4xl md:w-1/3">{title}</p>
              <div className="md:w-2/4 w-full ml-auto flex gap-8">
                <p>{"0" + index + "."}</p>
                <p>{description}</p>
              </div>
            </div>

            <div className="md:hidden flex pb-5">
              <div className="w-10 h-10">{image}</div>
              <p className="pl-5 text-md text-3xl pb-5">{title}</p>
            </div>
            <p className="md:hidden">{description}</p>
          </ul>
        );
      })}
    </li>
  );
}

export default BigList;
