/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import classNames from "classnames";
import { url } from "inspector";
import { Center } from "@react-three/drei";

interface ImageProps {
    title?: string;
    imagePath?: string;
}

const Image = (props: ImageProps) => {
    return (
        <>
            <img src={props.imagePath} className="max-w-full" />
            <h4 className="text-white text-center text-xl pt-2">
                {props.title}
            </h4>
        </>
    );
};

export default Image;
