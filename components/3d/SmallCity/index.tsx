import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import { PerspectiveCamera, SpotLight, Circle } from "@react-three/drei";
import { Building, BuildingProps, Car } from "../utils";

const dark = false;
const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

function random() {
  return Math.random();
}

let setup = false;
function Town() {
  const start: {
    x: number;
    y: number;
    z: number;
    rx: number;
    ry: number;
    rz: number;
  } = {
    x: 1222.7320983168847,
    y: 477.1608768614296,
    z: -191.63842351645644,
    rx: -1.8683406994794078,
    ry: 1.1910269307561,
    rz: 1.9184006675064047,
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
  const animation = new TWEEN.Tween(position)
    .to(
      {
        ...start,
        x: 2755,
        y: 394,
        z: 1074,
      },
      50000
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
  const group = useRef<any>();
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
    if (!setup) {
      console.log(">>>>><");

      // TWEEN.update();
      camera.current.position.x = start.x;
      camera.current.position.y = start.y;
      camera.current.position.z = start.z;

      setup = true;
    }
    camera.current.rotation.x = start.rx;
    camera.current.rotation.y = start.ry;
    camera.current.rotation.z = start.rz;

    group.current.rotation.y += 0.002;
    // camera.current.rotation.x += 0.1;
  });

  // useFrame(() => {
  //   spotlight.current.angle += 0.001;
  //   spotlight2.current.angle -= 0.001;
  // });

  return (
    <>
      {/*@ts-ignore */}
      <PerspectiveCamera
        ref={camera}
        args={[400, 10, 10, 10000]}
        makeDefault
        rotation={[start.rx, start.ry, start.rz]}
        position={[start.x, start.y, start.z]}
      />

      {/*@ts-ignore */}
      <SpotLight
        ref={spotlight}
        position={[1000.808030841272, 300, 600.438980817084]}
        intensity={6}
        angle={deg2rad(150)}
        attenuation={200}
        distance={3000}
      ></SpotLight>
      {/*@ts-ignore */}
      <SpotLight
        ref={spotlight2}
        position={[2000.808030841272, 300, 300.438980817084]}
        intensity={6}
        angle={deg2rad(150)}
        attenuation={200}
        distance={3000}
      ></SpotLight>
      {/* 
      <OrbitControls
        onEnd={console.log}
        makeDefault
        enableRotate
        enableZoom={false}
      ></OrbitControls> */}

      <group ref={group}>
        {/*@ts-ignore */}
        <Circle
          position={[0, 0, 0]}
          rotation={[Math.PI / 2, Math.PI, Math.PI / 2]}
          args={[300, 100]}
        >
          <meshPhongMaterial
            shininess={4}
            color={"rgb(234, 231, 231)"}
            attach="material"
          />
        </Circle>
        <Building position={[-80, 90]} size={[100, 240, 100]} />;
        <Building position={[70, 130]} size={[100, 200, 100]} />;
        <Building position={[70, -110]} size={[100, 300, 100]} />;
        <Building position={[-80, -140]} size={[100, 250, 100]} />;
        <Building position={[-80, -250]} size={[100, 200, 100]} />;
        <Car
          velocity={6}
          trip={[
            [100, 380],
            [100, 30],
            [-80, 30],
            [-80, 380],
          ]}
        ></Car>
      </group>
    </>
  );
}

export default function SmallCity() {
  const sunRef = useRef<any>();
  const ref = useRef<HTMLCanvasElement>(null);
  const parent = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={parent}
        style={{
          opacity: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <Canvas
          gl={{ preserveDrawingBuffer: true }}
          ref={ref}
          onCreated={() => {
            if (!parent.current) return;
            parent.current.className = "fadeIn";
            // setState(state + "Done");
          }}
          style={{
            backgroundColor: dark ? "#010229" : "#161616",
            width: "100%",
            height: "100%",
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
