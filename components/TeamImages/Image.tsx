/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import classNames from "classnames";
import { url } from "inspector";
import { Center } from "@react-three/drei";


interface ImageProps {
  children?: string;
  imagePath?: string;
}

const Image = (props: ImageProps) => {
 return (     
      <div> 
          <div className="w-60">
                <img src={props.imagePath}/>
          </div>
          <h4 className="text-white text-center">{props.children}</h4>
      </div>
  );
};

export default Image;
