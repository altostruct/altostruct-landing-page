import useTranslation from "hooks/useTranslation";
import Link from "next/link";

function Images() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className="md:hidden flex-wrap pb-20">
        <div className="flex w-screen place-content-between">
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-3.jpg"
            alt=""
          />
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-15.jpg"
            alt=""
          />
        </div>
        <div className="flex w-screen mt-6">
          <img
            className="w-6/12 mr-auto ml-auto"
            src="/images/MISC/Altostruct_office-18.jpg"
            alt=""
          />
        </div>
        <div className="flex w-screen place-content-between mt-6">
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-12.jpg"
            alt=""
          />
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-38.jpg"
            alt=""
          />
        </div>
        <div className="flex w-screen mt-6">
          <img
            className="w-6/12 ml-auto mr-auto"
            src="/images/MISC/Altostruct_office-29.jpg"
            alt=""
          />
        </div>
        <div className="flex w-screen place-content-between mt-6">
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-5.jpg"
            alt=""
          />
          <img
            className="w-5/12"
            src="/images/MISC/Altostruct_office-39.jpg"
            alt=""
          />
        </div>

        <div className="grid grid-cols-1 mt-8 place-items-end text-[#c3eec3]">
          <Link className="flex text-[#c3eec3]" href={"/about"}>
            <p className="text-xl">{t("Människorna bakom Altostruct")}</p>
            <img
              className="w-6 ml-2 pt-[2.5%] pr-2"
              src="/images/icons/Icon-59.svg"
            ></img>
          </Link>
        </div>
      </div>
      <div className="hidden mt-72 md:flex overflow-x-hidden">
        <img
          className="h-[300px] mr-4"
          src="/images/MISC/Altostruct_office-3.jpg"
          alt=""
        />
        <img
          className="h-[150px]"
          src="/images/MISC/Altostruct_office-15.jpg"
          alt=""
        />
        <img
          className="h-[150px] mr-4 mt-[150px]"
          src="/images/MISC/Altostruct_office-18.jpg"
          alt=""
        />
        <img
          className="h-[300px] mr-4"
          src="/images/MISC/Altostruct_office-39.jpg"
          alt=""
        />
        <img
          className="h-[150px] mt-[150px]"
          src="/images/MISC/Altostruct_office-12.jpg"
          alt=""
        />
        <img
          className="h-[150px] mr-4"
          src="/images/MISC/Altostruct_office-38.jpg"
          alt=""
        />
        <img
          className="h-[300px] mr-4"
          src="/images/MISC/Altostruct_office-29.jpg"
          alt=""
        />
        <img
          className="h-[150px]"
          src="/images/MISC/Altostruct_office-23.jpg"
          alt=""
        />
        <img
          className="h-[150px] mr-4 mt-[150px]"
          src="/images/MISC/Altostruct_office-18.jpg"
          alt=""
        />
        <img
          className="h-[300px] mr-4"
          src="/images/MISC/Altostruct_office-30.jpg"
          alt=""
        />
      </div>
    </>
  );
}

export default Images;
