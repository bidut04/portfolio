"use client";
import { Canvas } from "@react-three/fiber";
import { useKeyboard } from "../../hooks/use-keyboard";
import { FloatingItem } from "./floating-item";
import { useEffect, useState } from "react";

export function FloatingCanvas() {
  const keys = useKeyboard();
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });

  // Update global velocity based on keys
  useEffect(() => {
    const speed = 2.5;
    let x = 0;
    let y = 0;
    if (keys.forward) y += speed;
    if (keys.backward) y -= speed;
    if (keys.left) x -= speed;
    if (keys.right) x += speed;
    setVelocity({ x, y });
  }, [keys]);

  return (
    <div className="h-screen w-full bg-black cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        
        {/* Medicine Inventory Floating Items */}
        <FloatingItem name="Aspirin" position={[-2, 1, 0]} color="#7c3aed" velocity={velocity} />
        <FloatingItem name="Insulin" position={[2, -1, -2]} color="#0ea5e9" velocity={velocity} />
        <FloatingItem name="Amoxicillin" position={[0, 2, -1]} color="#f43f5e" velocity={velocity} />
        <FloatingItem name="Vitamin D" position={[-3, -2, 1]} color="#f59e0b" velocity={velocity} />
      </Canvas>

      {/* Tailwind v4 Overlay */}
      <div className="absolute top-10 left-10 text-white/40 font-mono text-xs tracking-widest uppercase">
        Use WASD to Explore Archive
      </div>
    </div>
  );
}