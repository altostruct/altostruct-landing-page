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

const JobPackage = (props: ButtonProps) => {
 return (
  <div className={classNames(
    style.topCorners //this is the css for the top corners
    )}>
    <div className={classNames(
      style.bottomCorners //This is the css for the bottom corners
    )}>
     
      <div> 
          <div className="flex place-content-center mt-14 md:mt-24 mb-5">
            <img className="w-16 ml-1" src={props.iconPath} alt=""></img>
          </div>
          <p className="flex text-center place-content-center text-3xl">{props.title}</p>
          <div className="flex place-content-center">
            <div className="flex absolute bottom-10"> {/* THE PROBLEM IS HERE */}
              <div>Read more</div>
              <img className="w-6 ml-1" src="/images/icons/arrow-icon.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default JobPackage;
