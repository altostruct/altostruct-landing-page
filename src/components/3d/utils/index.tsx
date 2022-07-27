import * as THREE from "three";
import React from "react";
import { Box, Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const dark = false;

export interface BuildingProps {
  readonly position: [number, number];
  readonly size: [number, number, number];
}

export interface CarProps {
  trip: [number, number][];
  velocity?: number;
}

export function Car(props: CarProps) {
  const VELOCITY = 10;
  const { trip, velocity = VELOCITY } = props;
  const route = [...trip, trip[0]];
  const car = useRef<any>();
  const size = [80, 1, 1] as const;

  const distance = (x1: number, x2: number, y1: number, y2: number) => {
    return ((x1 - x2) ** 2 + (y1 - y2) ** 2) ** (1 / 2);
  };

  useFrame(() => {
    const { current } = car;
    current.material.uniforms.dashOffset.value -= velocity;
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

export function Building(props: BuildingProps) {
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
