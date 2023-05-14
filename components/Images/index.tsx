import useTranslation from "hooks/useTranslation";
import Image from "next-image-export-optimizer";
import Link from "next/link";

function Images() {
  const { t } = useTranslation();

  const CustomerImage = (props: { src: string }) => {
    return (
      <Image
        height={300}
        width={300}
        className="w-5/12"
        src={props.src}
        alt=""
      />
    );
  };

  const images = [
    { src: "/images/MISC/Altostruct_office-3.jpg" },
    { src: "/images/MISC/Altostruct_office-15.jpg" },
    { src: "/images/MISC/Altostruct_office-15.jpg" },
    { src: "/images/MISC/Altostruct_office-12.jpg" },
  ];

  return (
    <>
      {" "}
      <div className="md:hidden flex-wrap pb-20">
        <div className="flex w-screen place-content-between">
          {images.map((image, index) => {
            return <CustomerImage key={index} src={image.src}></CustomerImage>;
          })}
        </div>
      </div>
    </>
  );
}

export default Images;
