"use client";
import { useEffect, useState } from "react";

export function useKeyboard() {
  const [keys, setKeys] = useState({ 
    forward: false, backward: false, left: false, right: false 
  });

  useEffect(() => {
    const handleDown = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "ArrowUp") setKeys(k => ({ ...k, forward: true }));
      if (e.key === "s" || e.key === "ArrowDown") setKeys(k => ({ ...k, backward: true }));
      if (e.key === "a" || e.key === "ArrowLeft") setKeys(k => ({ ...k, left: true }));
      if (e.key === "d" || e.key === "ArrowRight") setKeys(k => ({ ...k, right: true }));
    };

    const handleUp = (e: KeyboardEvent) => {
      if (e.key === "w" || e.key === "ArrowUp") setKeys(k => ({ ...k, forward: false }));
      if (e.key === "s" || e.key === "ArrowDown") setKeys(k => ({ ...k, backward: false }));
      if (e.key === "a" || e.key === "ArrowLeft") setKeys(k => ({ ...k, left: false }));
      if (e.key === "d" || e.key === "ArrowRight") setKeys(k => ({ ...k, right: false }));
    };

    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, []);

  return keys;
}