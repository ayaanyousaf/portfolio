// src/components/ui/Earth.jsx
import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, shaderMaterial } from "@react-three/drei";


// ThreeJS 3D Earth Model

// ---- Fresnel shader material (inline) ----
const FresnelMat = shaderMaterial(
  {
    color1: new THREE.Color(0x0088ff),
    color2: new THREE.Color(0x000000),
    fresnelBias: 0.1,
    fresnelScale: 1.0,
    fresnelPower: 4.0,
  },
  /* vertex */ `
    uniform float fresnelBias;
    uniform float fresnelScale;
    uniform float fresnelPower;
    varying float vReflectionFactor;
    void main() {
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
      vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
      vec3 I = worldPosition.xyz - cameraPosition;
      vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  /* fragment */ `
    uniform vec3 color1;
    uniform vec3 color2;
    varying float vReflectionFactor;
    void main() {
      float f = clamp( vReflectionFactor, 0.0, 1.0 );
      gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
    }
  `
);
extend({ FresnelMat });

// ---- Earth group (inline) ----
function EarthGroup() {
  const earthRef = useRef();
  const lightsRef = useRef();
  const cloudsRef = useRef();
  const glowRef = useRef();

  const [
    mapTex,
    bumpTex,
    specTex,
    lightsTex,
    cloudsTex,
    cloudsAlphaTex
  ] = useLoader(THREE.TextureLoader, [
    "/textures/00_earthmap1k.jpg",
    "/textures/01_earthbump1k.jpg",
    "/textures/02_earthspec1k.jpg",
    "/textures/03_earthlights1k.jpg",
    "/textures/04_earthcloudmap.jpg",
    "/textures/05_earthcloudmaptrans.jpg",
  ]);

  useFrame(() => {
    const ry = 0.002;
    if (earthRef.current) earthRef.current.rotation.y += ry;
    if (lightsRef.current) lightsRef.current.rotation.y += ry;
    if (cloudsRef.current) cloudsRef.current.rotation.y += 0.0023;
    if (glowRef.current) glowRef.current.rotation.y += ry;
  });

  return (
    <group scale={[2.5, 2.5, 2.5]} rotation={[0, 0, -23.4 * Math.PI / 180]}>
      {/* Earth */}
      <mesh ref={earthRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshPhongMaterial
          map={mapTex}
          specularMap={specTex}
          bumpMap={bumpTex}
          bumpScale={0.04}
        />
      </mesh>

      {/* City lights */}
      <mesh ref={lightsRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshBasicMaterial map={lightsTex} blending={THREE.AdditiveBlending} />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={[1.003, 1.003, 1.003]}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial
          map={cloudsTex}
          alphaMap={cloudsAlphaTex}
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Fresnel glow */}
      <mesh ref={glowRef} scale={[1.01, 1.01, 1.01]}>
        <icosahedronGeometry args={[1, 12]} />
        <fresnelMat transparent />
      </mesh>
    </group>
  );
}

export default function Earth({
  className = "h-64 w-64 md:h-80 md:w-80",
  controls = true
}) {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }} 
        style={{ background: "transparent" }}
      >
        {/* Tone mapping */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 0.5, 1.5]} intensity={2.0} />
        <EarthGroup />
        {controls && <OrbitControls enableZoom={false} enablePan={false} />}
      </Canvas>
      
    </div>
  );
}