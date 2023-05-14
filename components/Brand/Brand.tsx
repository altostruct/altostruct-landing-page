import React from "react";
import Image from "next-image-export-optimizer";

const Brand = () => {
  return (
    <Image
      alt=""
      src="/images/logo/Altostruct_Logo_White.png"
      width={100}
      height={10}
      loading="lazy"
    ></Image>
  );
};

export default Brand;
