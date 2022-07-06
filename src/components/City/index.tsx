import * as THREE from "three";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import TWEEN, { Tween } from "@tweenjs/tween.js";
import Fade from "react-reveal/Fade";
import {
  Plane,
  PerspectiveCamera,
  Line,
  Box,
  SpotLight,
} from "@react-three/drei";
import img from "../../images/lambda.png";
import map from "../../assets/houses.json";
import roads from "../../assets/roads.json";
import CSSTransitionGroup from "react-transition-group"; // ES6

const dark = false;
const deg2rad = (degrees: number) => degrees * (Math.PI / 180);

interface BuildingProps {
  readonly position: [number, number];
  readonly size: [number, number, number];
}

interface CarProps {
  trip: [number, number][];
}

function Car(props: CarProps) {
  const { trip } = props;
  const route = [...trip, trip[0]];
  const VELOCITY = 10;
  const car = useRef<any>();
  const size = [80, 1, 1] as const;

  const distance = (x1: number, x2: number, y1: number, y2: number) => {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** (1 / 2);
  };

  useFrame(() => {
    const { current } = car;
    current.material.uniforms.dashOffset.value -= VELOCITY;
  });

  const [startX, startZ] = trip[0];

  let length = 0;
  for (let i = 1; i < route.length; i++) {
    const [prevX, prevY] = route[i - 1];
    const [x, y] = route[i];
    length += distance(x, prevX, y, prevY);
  }

  const carLength = 100;
  const colors = [
    "rgb(161, 249, 161)",
    // "rgb(47, 58, 212)",
    // "rgb(212, 154, 47)",
    // "rgb(212, 83, 47)",
  ];

  return (
    <group position={[startX, 5, startZ]}>
      <Line
        color={colors[Math.floor(Math.random() * colors.length)]}
        gapSize={length - carLength}
        dashed
        lineWidth={1}
        dashOffset={Math.floor(Math.random() * length)}
        dashSize={carLength}
        ref={car}
        alphaWrite={1}
        points={[
          ...trip.slice(1).map((v) => [v[0] - startX, 0, v[1] - startZ]),
          [0, 0, 0] as any,
        ]}
      >
        <meshLambertMaterial
          reflectivity={1}
          refractionRatio={1}
          color="rgb(255, 0, 0)"
          attach="material"
        />
      </Line>
    </group>
  );
}

function Building(props: BuildingProps) {
  const { size, position } = props;
  const [x, z] = position;
  const [w, h, l] = size;
  const [blue] = useState(Math.random() < 0.1);

  const [hover, setHover] = useState(false);

  let color = h > 230 ? "rgb(255, 255, 255)" : "rgb(255, 255, 255)";

  return (
    <group
      onPointerOver={() => {
        if (window.innerWidth > 700) setHover(true);
      }}
      onPointerOut={() => {
        setHover(false);
      }}
      position={[x + w / 2, h / 2, z + l / 2]}
    >
      <Box args={[...size]} castShadow>
        <meshPhongMaterial
          shininess={4}
          color={!hover ? (dark ? "rgb(8, 0, 34)" : color) : "rgb(246, 93, 54)"}
          attach="material"
        />
      </Box>

      <Box args={[...size]}>
        <meshLambertMaterial
          side={THREE.DoubleSide}
          wireframe
          wireframeLinewidth={3}
          color={dark ? "rgb(34, 33, 33)" : "rgb(157, 155, 155)"}
          attach="material"
        />
      </Box>
    </group>
  );
}

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
    z: 1518,
    rx: -0.6,
    ry: 1,
    rz: 0.5,
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
      <Plane position={[0, 0, 0]} />
      <group>
        {map.map((b: any, index: any) => {
          return <Building key={index} {...b} />;
        })}
        {roads.map((road) => {
          return <Car trip={road as any} />;
        })}
        {roads.map((road) => {
          return <Car trip={road as any} />;
        })}
        {roads.map((road) => {
          return <Car trip={road as any} />;
        })}
        {roads.map((road) => {
          return <Car trip={road as any} />;
        })}
        {roads.map((road) => {
          return <Car trip={road as any} />;
        })}
      </group>
    </>
  );
}

export default () => {
  const sunRef = useRef<any>();
  const ref = useRef<HTMLCanvasElement>(null);

  return (
    <>
      <Fade duration={1000} ssrFadeout delay={400}>
        <div>
          <Canvas
            gl={{ preserveDrawingBuffer: true }}
            ref={ref}
            id="background"
            style={{
              backgroundColor: dark ? "#010229" : "rgb(255, 255, 255)",
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
      </Fade>
    </>
  );
};
