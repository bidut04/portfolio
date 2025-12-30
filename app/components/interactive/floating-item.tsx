"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingItemProps {
  name: string;
  position: [number, number, number];
  color: string;
  velocity: { x: number; y: number };
}

export function FloatingItem({ name, position, color, velocity }: FloatingItemProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;

    // Smooth movement logic (Lerp)
    meshRef.current.position.x = THREE.MathUtils.lerp(
      meshRef.current.position.x, 
      position[0] + velocity.x, 
      0.05
    );
    meshRef.current.position.y = THREE.MathUtils.lerp(
      meshRef.current.position.y, 
      position[1] + velocity.y, 
      0.05
    );

    // Subtle rotation based on mouse or time
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh>
          <boxGeometry args={[1.5, 2, 0.2]} />
          <MeshDistortMaterial color={color} speed={2} distort={0.2} />
        </mesh>
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.2}
          color="white"
          font="/fonts/Geist-Bold.ttf" // Optional: use your own font path
        >
          {name}
        </Text>
      </Float>
    </group>
  );
}