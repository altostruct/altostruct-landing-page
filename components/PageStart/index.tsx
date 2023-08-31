import NoSSR from "@components/NoSSR";
import { LegacyRef, ReactNode, Suspense, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import type { GlobeMethods } from "react-globe.gl";
import Button from "@components/Button/Button";
import { SizeMe } from "react-sizeme";
import Measure from 'react-measure'

const GlobeNoSSRWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-globe.gl");

    const Globe = ({ forwardedRef, ...props }: any) => (
      <RQ ref={forwardedRef} {...props} />
    );

    return Globe;
  },
  { ssr: false }
);

interface PageStartProps {
  title: ReactNode;
  description?: ReactNode;
  cta?: ReactNode
  mainContent?: ReactNode
}

const OFFICE = { lng: 8.13333, lat: 30.36667, altitude: 2 };

function PageStart(props: PageStartProps) {
  const { title, description, cta, mainContent } = props;
  const ref = useRef<GlobeMethods>();

  const N = 10;
  const arcsData = Array(N)
    .fill(0)
    .map(() => ({
      startLng: OFFICE.lng + Math.random() * 1,
      startLat: OFFICE.lat + Math.random() * 1,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: ["#c3eec3", "#c3eec3"],
    }));

  useEffect(() => {
    if (ref.current?.camera) {
      ref.current.controls().enableZoom = false;
    }
  }, [ref]);


  return (
    <div className="relative">
      <div className="flex gap-16 md:h-screen max-h-[96em]">
        <div className="mt-[38vh] md:my-auto -translate-y-10 z-10 relative flex-1 h-fit w-2/3">
          <h1 className="mb-3 text-4xl md:text-6xl leading-tight md:leading-tight">
            {title}
          </h1>
          <div className="my-5 scale-x-100 transition-all"></div>
          <p className="text-2xl " style={{ fontFamily: "KHTeka-Light" }}>
            {description}
          </p>
          {cta && <div className="pt-4">{cta}</div>}
        </div>
        {mainContent && <div className="absolute opacity-10 md:opacity-100 md:relative md:w-1/3">{mainContent}</div>}
        {!mainContent && <div className="top-0 -translate-y-1/2 opacity-50 w-96 h-96 md:top-0 md:left-0 left-full -translate-x-1/2 md:opacity-100 absolute md:relative md:my-auto md:w-1/3 md:translate-y-0 md:translate-x-0">
          <div className="m-auto w-full md:w-full">
            <Measure>{({ measureRef, contentRect }) => {
              return <div ref={measureRef} className="w-full">
                {contentRect.entry && <GlobeNoSSRWrapper
                  globeImageUrl="/images/backgrounds/earth4.webp"
                  arcsData={arcsData}
                  arcColor={"color"}
                  arcDashLength={() => Math.random()}
                  arcDashGap={() => Math.random()}
                  arcDashAnimateTime={() => Math.random() * 4000 + 1000}
                  forwardedRef={(ref: GlobeMethods) => {
                    if (ref) {
                      ref.controls().enableZoom = false;
                      ref.controls().autoRotate = true;
                      // ref.pointOfView(OFFICE, 4000);
                    }
                  }}
                  backgroundColor="rgba(0,0,0,0)"
                  width={contentRect.entry.width}
                  height={contentRect.entry.width}
                ></GlobeNoSSRWrapper>}
              </div>
            }}</Measure>
          </div>
        </div>}
      </div>
    </div >
  );
}

export default PageStart;
