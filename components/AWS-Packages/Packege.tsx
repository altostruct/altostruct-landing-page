/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import * as React from "react";
import style from "./Packege.module.scss";

interface ButtonProps {
  children?: string;
  title?: string
  className?: string;
  iconPath?: string;
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
          <div className="flex place-content-center mt-10">
            <img className="w-7 md:w-15 lg:w-20 ml-1" src={props.iconPath} alt="" />
          </div>
          <h3 className="flex place-content-center">{props.title}</h3>
          <p className={classNames(style.headerContent)}>
            {props.children}
          </p>
          <div className="flex place-content-center">
            <a className="text-white flex absolute bottom-10">
              läs mer
              <img className="w-6 ml-1" src="/images/icons/arrow-icon.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Package;
