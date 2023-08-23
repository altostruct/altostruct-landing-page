import React from "react";
import Image from "next-image-export-optimizer";

const Brand = (props: { className?: string }) => {
  const { className } = props
  return (
    <Image
      className={className}
      alt=""
      src="/images/logo/Altostruct_Logo_White.png"
      width={100}
      height={5}
      placeholder="empty"
    ></Image>
  );
};

export default Brand;
