import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Topbar from "@components/Topbar/Topbar";
import Content from "@components/Content";
import useTranslation from "hooks/useTranslation";
import SEO from "@components/SEO";
import WordCircled from "components/Word-Circled/Word";
import TeamImage from "components/TeamImages/Image"

function About() {
  const { t } = useTranslation();

  return (
    <>
    <SEO
      title={t("Altostruct | Cloud Consulting")}
      description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
    ></SEO>
    <Topbar></Topbar>
    
    <div className="bg-[#161616] md:pb-20 pb-10">
      <Content>
        <div className="mb-6 items-center md:text-left text-center text-white md:w-3/4">
          <p className="pt-30 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4"> {t("Lorem")} <WordCircled>{t("Lorem")}</WordCircled> {t("dolor sit amet adipisicing elit lorem")} <WordCircled borderCircle={true}>{t("Lorem")}</WordCircled> {t("dolor sit amet")} <WordCircled color="blue">{t("Lorem")}</WordCircled></p>
          <p className="mt-5 mb-72 text-left">{t("Lorem ipsum dolor sit amet consectetur adipisicing elit/consectetur adipisicing elit.")}</p>
          <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
              <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
              <a href={"/career"}> 
              <p className="pl-2 text-right text-white">Är du vår nästa kollega?</p>
              </a>
          </div>
        </div>
        </Content>
            

            <div className="bg-[#292929]">
              <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-end md:pr-28 pr-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
            <Content>

              <div className="md:grid md:grid-cols-6 md:gap-4 text-white">
                <div className="col-start-1 col-end-5">
                  <div className="pt-20 text-white font-sans">
                    <h3>{t("Om Altostruct")}</h3>
                    <p>{t("This is a small lorem / This is a small lorem")}</p>
                  </div>
                  <div className="relative">
                    <h1 className="relative z-10"> {t(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidsada, est deserunt laudantium repellat assumenda dignissimos pariatur animi fuga amet totam sapiente culpa, blanditiis repellendus cum porro provident. Rerum, magni quae?")}</h1>
                    <div className="absolute top-20 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                    <div className="absolute top-2 left-10 rotate-12 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                  </div>
                </div>

                <div className="col-start-3 col-end-7 justify-items-end">
                <div className="pt-20 text-white font-sans">
                  <h3>{t("Om Altostruct")}</h3>
                  <p>This is a small lorem / This is a small lorem</p>
                </div>
                  <div className="relative">
                    <h1 className="relative z-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidsada, est deserunt laudantium repellat assumenda dignissimos pariatur animi fuga amet totam sapiente culpa, blanditiis repellendus cum porro provident. Rerum, magni quae?</h1>
                    <div className="absolute top-32 left-3/4 w-20 h-20 md:w-40 md:h-40 rotate-45 bg-[#6024ff]"></div>
                    <div className="absolute top-2 left-20 w-20 h-20 md:w-40 md:h-40 bg-[#6024ff]"></div>
                  </div>
                </div>
              </div>
              </Content>
              <div className="flex place-content-start">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
            </div>

          <Content>
          <div className="hidden md:block">
              <div className="text-white pt-40 pb-20">
                <h2>Varför välja oss?</h2>
                <p>This is a small text/Whats up dude</p>
              </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
              </div>
              <div className="flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>Lorem ipsem</h1>
                <p className="w-1/2 ml-auto font-sans">
                Lorem, ipsum dolor sit amet dasds adipisicing elit. Numquam eum doloribus libero amet quod molestias, recusandae sed temporibus harum consequuntur est odit. Incidunt corrupti placeat debitis quam cupiditate delectus expedita.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
              </div>
              <div className="md:flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>Lorem ipsem</h1>
                <p className="w-1/2 ml-auto font-sans">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum doloribus libero amet quod molestias, recusandae sed temporibus harum consequuntur est odit. Incidunt corrupti placeat debitis quam cupiditate delectus expedita.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-12 text-white items-center mb-20">
              <div className="md:col-span-1">
                <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
              </div>
              <div className="flex col-span-11 items-center ml-6 border-b-[1px]">
                <h1>Lorem ipsem</h1>
                <p className="w-1/2 ml-auto font-sans">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam eum doloribus libero amet quod molestias, recusandae sed temporibus harum consequuntur est odit. Incidunt corrupti placeat debitis quam cupiditate delectus expedita.
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden text-white">
            <div className="text-white pt-40 pb-20">
                <h2>Varför välja oss?</h2>
                <p>This is a small text/Whats up dude</p>
              </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
                  <h2 className="ml-2">This is the title</h2>
                </div>
                <p className="mt-5">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id laudantium maxime eveniet sint illum. Voluptatem eaque mollitia voluptates minus assumenda harum, exercitationem consequuntur recusandae amet voluptatum incidunt, facere cumque porro!
                </p>
              </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
                  <h2 className="ml-2">This is the title</h2>
                </div>
                <p className="mt-5">
                  Lorem ipsum dolor sit, amet consectetur  elit. Id laudantium maxime eveniet sint illum. Voluptatem eaque mollitia voluptates minus assumenda harum, exercitationem consequuntur recusandae amet voluptatum incidunt, facere cumque porro!
                </p>
              </div>

              <div className="mb-10">
                <div className="flex border-b-[1px]">
                  <img className="w-10" src="/images/icons/arrow-icon.svg" alt="" />
                  <h2 className="ml-2">This is the title</h2>
                </div>
                <p className="mt-5 font-sans">
                  Lorem ipsum dolor sit, amet consectetur daiosdjoasdaskisad elit. Id laudantium maxime eveniet sint illum. Voluptatem eaque mollitia voluptates minus assumenda harum, exercitationem consequuntur recusandae amet voluptatum incidunt, facere cumque porro!
                </p>
              </div>
          </div>
          </Content>
 
          
          <div className="bg-[#292929]">
              <div className="flex">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex md:pl-28 pl-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>

            <div className="md:hidden flex-wrap pt-10">
              <div className="flex w-screen place-content-between">
              <img className="w-1/4" src="/images/backgrounds/earth.png" alt="" />
              <img className="w-1/4 mr-[25%]" src="/images/backgrounds/earth.png" alt="" />
              </div>
              <div className="flex w-screen">
              <img className="w-1/4 mr-auto ml-auto" src="/images/backgrounds/earth.png" alt="" />
              <img className="w-1/4" src="/images/backgrounds/earth.png" alt="" />
              </div>
              <div className="flex w-screen place-content-between">
              <img className="w-1/4" src="/images/backgrounds/earth.png" alt="" />
              <img className="w-1/4 mr-[25%]" src="/images/backgrounds/earth.png" alt="" />
              </div>
              <div className="flex w-screen">
              <img className="w-1/4 mr-auto ml-auto" src="/images/backgrounds/earth.png" alt="" />
              <img className="w-1/4" src="/images/backgrounds/earth.png" alt="" />
              </div>
            </div>
          
            
            <div className="pt-10 md:pt-40 flex place-content-end text-white pb-10 mr-10 font-sans">
              <p className="text-3xl">Hälsa Altostruct teamet!</p>
            </div>

            <div className="hidden md:grid grid-cols-6 pb-40 ml-2 mr-2 font-sans">
              <div className="">
                <TeamImage children="description" imagePath="/images/backgrounds/earth.png"></TeamImage>
              </div>
              <div className="flex ml-2">
                <TeamImage width={true} children="Mustafa" imagePath="/images/backgrounds/earth.png"></TeamImage>
                <div className="pt-[49%]">              
                  <TeamImage width={true} children="This is a description" imagePath="/images/backgrounds/earth.png"></TeamImage>
                </div>
              </div> 
              <div className="ml-2">
                <TeamImage children="Rubbestad" imagePath="/images/backgrounds/earth.png"></TeamImage>
              </div>
              <div className="flex ml-2">
                <div className="pt-[49%]">              
                <TeamImage width={true} children="Erik" imagePath="/images/backgrounds/earth.png"></TeamImage>
                </div>
                <TeamImage width={true} children="Gustav" imagePath="/images/backgrounds/earth.png"></TeamImage>
              </div> 
              <div className="ml-2">
                <TeamImage children="This is a description" imagePath="/images/backgrounds/earth.png"></TeamImage>
              </div>
              <div className="flex ml-2">
                <TeamImage width={true} children="This is a description" imagePath="/images/backgrounds/earth.png"></TeamImage>
                <div className="pt-[49%]">              
                  <TeamImage width={true} children="This is a description" imagePath="/images/backgrounds/earth.png"></TeamImage>
                </div>
              </div> 
            </div>
          </div>


          <div className="flex place-content-end">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]">
                </div>
              </div>
              <div className="flex place-content-end md:pr-28 pr-14">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#292929]">
                </div>
              </div>
        <Content>
        <div className="text-white pt-10 md:w-2/4 mb-10">
          <h1>Vill du veta mer om altostruct? <WordCircled borderCircle={true} color="blue">Hör av dig</WordCircled> till oss så berättar vi mer!</h1> 
        </div>
        <Form></Form>
        </Content>
       
    </div>
    <Footer />
  </>
  );
}

export default About;
