/* eslint-disable @next/next/no-img-element */
import SEO from "@components/SEO";
import Cite from "components/Cite";
import Content from "components/Content";
import Footer from "components/Footer/Footer";
import Topbar from "components/Topbar/Topbar";
import useTranslation from "hooks/useTranslation";
import WordCircled from "components/Word-Circled/Word";
import Package from "@components/Package/Packege"
import { useRef } from "react";
import React, { useState } from 'react'


export default function Home() {
  const { t } = useTranslation();
  const [visiblePackage, setVisiblePackage] = useState(0);
  const [visibleCitation, setVisibleCitation] = useState(0)

  const refPackage1 = useRef<HTMLDivElement>(null);
  const refPackage2 = useRef<HTMLDivElement>(null);
  const refPackage3 = useRef<HTMLDivElement>(null);
  const refCite1 = useRef<HTMLDivElement>(null);
  const refCite2 = useRef<HTMLDivElement>(null);



  return (
    <>
      <SEO
        title={t("Altostruct | Cloud Consulting")}
        description={t("Altostruct är ett AWS konsultbolag i Stockholm.")}
      ></SEO>
      <Topbar></Topbar>
      <div className="bg-[#161616]">
        <Content>
          <div className="mb-6 items-center md:text-left text-center text-white md:w-3/4">
            <p className="pt-20 md:pt-48 mt-9 text-3xl md:text-6xl text-left md:w-3/4">Lorem <WordCircled borderCircle={true} color="dsa">Lorem</WordCircled> dolor sit amet adipisicing elit lorem dolor sit amet <WordCircled>Lorem</WordCircled></p>
            <p className="mt-5 mb-72 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit/consectetur adipisicing elit.</p>
            <div className="rotate-90 text-white text-xs origin-top-right flex absolute md:bottom-80 bottom-72 right-5">
              <img src="/images/icons/arrow-icon.svg" width="20" decoding="async" loading="lazy"></img>
              <a href={"/career"}> 
              <p className="pl-2 text-right text-white">Är du vår nästa kollega?</p>
              </a>
            </div>
          </div>
          </Content>

          <div className="items-center text-white bg-[#292929]">
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
              <div className="flex place-content-center">
              <img className="flex place-content-center w-20 mb-5" src="/images/icons/Icon-51.svg"></img>
              </div>
              <div className="flex place-content-center text-center">
                <p className="font-bold">
                This should be a small text
                </p>
              </div>
              <div className="grid grid-cols-12">
                <div className="md:col-start-4 md:col-span-6 col-start-2 col-span-10 mt-4 text-center"> 
                <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam libero deserunt, architecto consequuntur sint maiores officia praesentium cum ipsam in dignissimos quod corporis odit, facere numquam repudiandae illum est
                </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 mt-36 w-11/12 md:w-11/12 m-auto pb-10">
                <div className="col-start-1 text-xl">våra startpaket</div>
                <div className="col-start-1 text-sm">Våra startpaket/Våra Våra Våra Våra Vår aVåra Vår aVå ra</div>

                <div className="flex overflow-x-auto md:grid md:grid-cols-3 md:gap-4 place-items-center snap-x snap-proximity" onScroll={(e) => 
                  {
                    const test = refPackage3.current?.getBoundingClientRect().x
                    if(test != undefined ){
                      if(test < 300){
                        setVisiblePackage(2);
                      }
                      if(test > 300 && test < 600){
                        setVisiblePackage(1);
                      }
                      if(test > 600 && test < 900){
                        setVisiblePackage(0);
                      }
                    }
                  }}
                  >
                  <div ref={refPackage1} className="snap-center">
                    <Package
                    title="AWS Package 1"
                    children="This is a description "
                    iconPath="/images/icons/Icon-49.svg"
                    ></Package>
                  </div>
                  <div ref={refPackage2} className="snap-center">
                  <Package
                    title="AWS Package 2"
                    children="This is a description"
                    iconPath="/images/icons/Icon-50.svg"
                    ></Package>
                  </div>
                  <div ref={refPackage3} className="snap-center">
                  <Package
                    title="AWS Package 3"
                    children="This is a description"
                    iconPath="/images/icons/Icon-58.svg"
                    ></Package>
                  </div>
                </div>
                
                <div className="flex md:hidden justify-center">
                    <div onClick={() => 
                    {
                      refPackage1.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisiblePackage(0);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visiblePackage === 0 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>

                    <div onClick={() => {
                      refPackage2.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisiblePackage(1);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visiblePackage === 1 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>

                    <div onClick={() => 
                      {
                        refPackage3.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                        setVisiblePackage(2);
                      }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visiblePackage === 2 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>
                  
                </div>

              </div>

              <div className="flex place-content-start md:pl-28 pl-14 md:pt-28 pt-16">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
              <div className="flex place-content-start">
                <div className="md:w-28 md:h-28 h-14 w-14 bg-[#161616]">
                </div>
              </div>
            </div>
          
          <Content>
            <div className="mt-36 pb-20">
                <div className="md:hidden relative text-white mb-10">
                    <h3>Rekommendationer</h3>
                    <p>Lyssna inte på oss lyssna på våra klienter</p>
                  </div>
                <div className="flex overflow-x-auto md:grid md:grid-cols-3 md:gap-4 place-items-center text-white snap-x snap-proximity"
                onScroll={(e) => 
                  {
                    const citescroll = refCite2.current?.getBoundingClientRect().x
                    console.log(citescroll)
                    if(citescroll != undefined ){
                      if(citescroll < 300){
                        setVisibleCitation(1);
                      }
                      if(citescroll > 300 && citescroll < 600){
                        setVisibleCitation(0);
                      }
                    }
                  }}
                >
                  <div className="hidden md:block relative right-20 bottom-20">
                    <h3>Rekommendationer</h3>
                    <p>DSAJDKJLSAKLJDASJLJKDASLJKDSA</p>
                  </div>
                  <div ref={refCite1} className="snap-center">
                    <Cite
                    author="AWS Package 1"
                    cite="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam libero deserunt"
                    citeIcon="/images/icons/Icon-34.png"
                    ></Cite>
                  </div>
                  <div ref={refCite2} className="snap-center">
                    <Cite
                    author="AWS Package 1"
                    cite="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam libero deserunt"
                    citeIcon="/images/icons/Icon-40.png"
                    ></Cite>
                  </div>
                </div>
                <div className="flex md:hidden justify-center">
                    <div onClick={() => 
                    {
                      refCite1.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisibleCitation(0);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visibleCitation === 0 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>

                    <div onClick={() => {
                      refCite2.current?.scrollIntoView({block: "nearest", behavior:"smooth"})
                      setVisibleCitation(1);
                    }} 
                      className="flex-none pr-2 snap-center">
                      <div className={`h-3 w-3 ${visibleCitation === 1 ? "bg-green-300" : "bg-white"}`}>
                      </div>
                    </div>
                </div>
              </div>
          </Content>

        <div className="md:hidden flex-wrap pb-20">
            <div className="flex w-screen place-content-between">
            <img className="w-1/4" src="/images/MISC/Altostruct_office-3.jpg" alt="" />
            <img className="w-1/4 mr-[25%]" src="/images/MISC/Altostruct_office-15.jpg" alt="" />
            </div>
            <div className="flex w-screen">
            <img className="w-1/4 mr-auto ml-auto" src="/images/MISC/Altostruct_office-18.jpg" alt="" />
            <img className="w-1/4" src="/images/MISC/Altostruct_office-39.jpg" alt="" />
            </div>
            <div className="flex w-screen place-content-between">
            <img className="w-1/4" src="/images/MISC/Altostruct_office-12.jpg" alt="" />
            <img className="w-1/4 mr-[25%]" src="/images/MISC/Altostruct_office-38.jpg" alt="" />
            </div>
            <div className="flex w-screen">
            <img className="w-1/4 mr-auto ml-auto" src="/images/MISC/Altostruct_office-29.jpg" alt="" />
            <img className="w-1/4" src="/images/MISC/Altostruct_office-23.jpg" alt="" />
            </div>
            <div className="grid grid-cols-1 mt-5 place-items-end text-[#c3eec3]">
                <a className="flex text-white" href="">
                <p>
                Människorna bakom Altostruct
                </p>
                <img className="w-6 ml-2" src="/images/icons/arrow-icon.svg"></img>
                </a>
            </div>
          </div>

          <div className="hidden md:flex mt-96 overflow-x-auto">
            <img className="h-[300px] mr-4" src="/images/MISC/Altostruct_office-3.jpg" alt="" />
            <img className="h-[150px]" src="/images/MISC/Altostruct_office-15.jpg" alt="" />
            <img className="h-[150px] mr-4 mt-[150px]" src="/images/MISC/Altostruct_office-18.jpg" alt="" />
            <img className="h-[300px] mr-4" src="/images/MISC/Altostruct_office-39.jpg" alt="" />
            <img className="h-[150px] mt-[150px]" src="/images/MISC/Altostruct_office-12.jpg" alt="" />
            <img className="h-[150px] mr-4" src="/images/MISC/Altostruct_office-38.jpg" alt="" />
            <img className="h-[300px] mr-4" src="/images/MISC/Altostruct_office-29.jpg" alt="" />
            <img className="h-[150px]" src="/images/MISC/Altostruct_office-23.jpg" alt="" />
            <img className="h-[150px] mr-4 mt-[150px]" src="/images/MISC/Altostruct_office-18.jpg" alt="" />
            <img className="h-[300px] mr-4" src="/images/MISC/Altostruct_office-30.jpg" alt="" />
            
          </div>
          <div className="hidden md:grid grid-cols-1 mt-5 place-items-end pb-40 text-[#c3eec3]">
              <div className="flex text-2xl mr-5">
                <p>
                Människorna bakom Altostruct
                </p>
                <img className="w-10 ml-2" src="/images/icons/arrow-icon.svg"></img>
              </div>
          </div>

      </div>
      <Footer />
    </>
  );
}
