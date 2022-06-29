import AnimatedLogo from "@components/AnimatedLogo";
import Footer from "@components/Footer/Footer";
import Form from "@components/Form";
import Section from "@components/Section";
import Topbar from "@components/Topbar/Topbar";
import React, { Suspense } from "react";

const Cube = React.lazy(() => import("@components/City"));

function AboutPage() {
  return (
    <>
      <Topbar></Topbar>
      <div className="h-screen w-screen mt-16">
        <div className="w-full absolute h-screen overflow-hidden z-10">
          <div className="m-auto">
            <Suspense fallback={null}>
              <Cube />
            </Suspense>
          </div>
        </div>
        <div className="relative z-10 p-8 flex w-1/2 bg-white h-full">
          <div className="m-auto ">
            <div className="pt-10 pl-10 w-full">
              <h2>"Have fun and learn by doing"</h2>
              <p className="pt-6">
                Det viktigaste för oss är att man brinner för det projekt man
                håller på med. Vi tror inte på föreläsningar från dyra experter,
                inte tråkiga eftermiddagar där man bara lyssnar eller
                obligatoriska kurser som ingen vill göra. Vi tror att personer
                som gillar det hen gör lär sig bäst. Därför har vi fokus på eget
                arbete och alla hos oss får betald tid för att arbeta med
                valfritt eget projekt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Section position="full">
        <Form></Form>
      </Section>
      <Footer></Footer>
    </>
  );
}

export default AboutPage;
