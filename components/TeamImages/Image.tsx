/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import classNames from "classnames";


interface ImageProps {
  children?: string;
  imagePath?: string;
  width?: boolean;
  position?: string;
}

const Image = (props: ImageProps) => {
 return (     
      <div> 
          <div className="flex text-white">
            <img className={classNames(
              props.width ? "w-[205px]" : "w-[400px]"
              )} src={props.imagePath} alt="" />
          </div>
          <h4 className="text-white text-center">{props.children}</h4>
      </div>
  );
};

export default Image;
