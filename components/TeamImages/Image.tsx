/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import classNames from "classnames";
import { url } from "inspector";
import { Center } from "@react-three/drei";
import NextImage from "next-image-export-optimizer";


interface ImageProps {
  title?: string;
  imagePath?: string;
}

const Image = (props: ImageProps) => {
  return (
    <>
      {props.imagePath && <NextImage alt="" src={props.imagePath} className="max-w-full" />}
    </>
  );
};

export default Image;
