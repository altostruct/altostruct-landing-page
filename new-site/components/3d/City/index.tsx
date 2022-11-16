import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import { Plane, PerspectiveCamera, SpotLight } from "@react-three/drei";
import map from "../../../assets/houses.json";
import roads from "../../../assets/roads.json";
import { Building, BuildingProps, Car } from "../utils";

const dark = false;
const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

function random() {
  return Math.random();
}

function Town() {
  const start: {
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
  } = {
    x: 2470,
    y: 359,
    z: 1218,
    rx: -0.7,
    ry: 1.38,
    rz: 0.65,
  };

  const position: {
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
  } = { ...start };

  /**
   * 1888.9246606793604
14.213519977306106
893.780031752189
   */
  new TWEEN.Tween(position)
    .to(
      {
        ...start,
        x: 2755,
        y: 394,
        z: 1074,
      },
      100000
    )
    // .easing(TWEEN.Easing.Exponential.In)
    .chain(
      new Tween(position)
        .to(
          {
            ...start,
            x: 1888,
            y: 14,
            z: 863,
            ry: 1.5,
          },
          50000
        )
        .chain(
          new Tween(position)
            .to(
              {
                ...start,
                x: 1388,
                y: 14,
                z: 863,
                ry: 1.5,
              },
              50000
            )
            .chain(
              new Tween(position).to(
                {
                  ...start,
                  x: 1388,
                  y: 1800,
                  z: 863,
                  rx: -1.5697031468305696,
                  ry: 0.10521542911769592,
                  rz: 1.5603875831844864,
                },
                50000
              )
            )
        )
      // .easing(TWEEN.Easing.Exponential.In)
    )

    // .to(start, 1000)
    // .repeat(100)
    .start();

  const camera = useRef<any>();
  const spotlight = useRef<any>();
  const spotlight2 = useRef<any>();
  const buildings = 10;
  const cols = 20;
  const rows = 20;
  const width = 30;
  const space = 5;
  const floorRatio = 4;
  const maxFloors = 4;
  const startX = -cols * width * (1 / 2);
  const startY = -rows * width * (1 / 2);
  const buildingRation = 0.7;
  const props: BuildingProps[] = [];
  const steetRation = 0.9;
  const skippedY: number[] = new Array(rows)
    .fill(0)
    .map((_, i) => i)
    .filter(() => steetRation < Math.random());

  for (let x = 3; x < cols; x++) {
    if (random() > steetRation) continue;
    for (let y = 3; y < rows; y++) {
      if (skippedY.indexOf(y) !== -1) continue;
      if (random() > buildingRation) continue;

      let height = Math.round(1 + random() * maxFloors) * floorRatio;
      const xWithSpace = (space + width) * x;
      const yWithSpace = (space + width) * y;
      if (random() > 0.9) height = 50;

      props.push({
        position: [startX + xWithSpace, startY + yWithSpace],
        size: [width, height, width],
      });
    }
  }

  useFrame(() => {
    // TODO remove from code
    if ((window as any).PREVIEW) return;

    TWEEN.update();
    camera.current.position.x = position.x;
    camera.current.position.y = position.y;
    camera.current.position.z = position.z;
    camera.current.rotation.x = position.rx;
    camera.current.rotation.y = position.ry;
    camera.current.rotation.z = position.rz;
  });

  useFrame(() => {
    spotlight.current.angle += 0.001;
    spotlight2.current.angle -= 0.001;
  });

  return (
    <>
      {/*@ts-ignore */}
      <PerspectiveCamera
        ref={camera}
        args={[400, 10, 10, 10000]}
        makeDefault
        rotation={[-0.23, 1, 0.23]}
        position={[2470, 559, 1518]}
      />

      <SpotLight
        ref={spotlight}
        position={[1000.808030841272, 300, 600.438980817084]}
        intensity={6}
        angle={deg2rad(150)}
        attenuation={200}
        distance={3000}
      ></SpotLight>

      <SpotLight
        ref={spotlight2}
        position={[2000.808030841272, 300, 300.438980817084]}
        intensity={6}
        angle={deg2rad(150)}
        attenuation={200}
        distance={3000}
      ></SpotLight>

      {/* <OrbitControls
        onChange={console.log}
        makeDefault
        enableRotate
        enableZoom
      ></OrbitControls> */}
      {/*@ts-ignore */}
      <Plane position={[0, 0, 0]} />
      <group>
        {map.map((b: any, index: any) => {
          return <Building key={index} {...b} />;
        })}
        {roads.map((road, index) => {
          return <Car key={index} trip={road as any} />;
        })}
        {roads.map((road, index) => {
          return <Car key={index} trip={road as any} />;
        })}
        {roads.map((road, index) => {
          return <Car key={index} trip={road as any} />;
        })}
        {roads.map((road, index) => {
          return <Car key={index} trip={road as any} />;
        })}
        {roads.map((road, index) => {
          return <Car key={index} trip={road as any} />;
        })}
      </group>
    </>
  );
}

export default function City() {
  const sunRef = useRef<any>();
  const ref = useRef<HTMLCanvasElement>(null);
  const parent = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={parent}
        style={{
          opacity: 0,
        }}
      >
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          ref={ref}
          onCreated={() => {
            if (!parent.current) return;
            parent.current.className = "fadeIn";
          }}
          style={{
            // backgroundColor: dark ? "#010229" : "rgb(255, 255, 255)",
            width: "100%",
            height: window.innerHeight * 1.4,
            display: "inline-block",
          }}
          dpr={window.devicePixelRatio}
        >
          <ambientLight ref={sunRef} intensity={dark ? 2 : 1} />
          <Town />
        </Canvas>
      </div>
    </>
  );
}
