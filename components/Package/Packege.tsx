/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import * as React from "react";
import style from "./Packege.module.scss";

interface ButtonProps {
  description?: string;
  title?: string
  className?: string;
  iconPath?: string;
  link?: string;
}

const Package = (props: ButtonProps) => {
 return (
  <div className={classNames(
    style.topCorners //this is the css for the top corners
    )}>
    <div className={classNames(
      style.bottomCorners //This is the css for the bottom corners
    )}>
     
      <div> 
          <div className="flex place-content-center mt-10 mb-5">
            <img className="w-10 lg:w-16 ml-1" src={props.iconPath} alt="" />
          </div>
          <h2 className="flex text-center place-content-center">{props.title}</h2>
          <h4 className={classNames(style.headerContent)}>
            {props.description}
          </h4>
          <div className="flex place-content-center">
            <a ref={props.link} className="text-white flex absolute bottom-10">
              Read more
              <img className="w-6 ml-1" src="/images/icons/arrow-icon.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Package;
