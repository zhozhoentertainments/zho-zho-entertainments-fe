"use client";

import Spline from "@splinetool/react-spline";
import { Suspense, useState } from "react";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

/**
 * A reusable Spline component for rendering 3D scenes.
 * Includes a loading fallback and basic error handling.
 */
export default function SplineScene({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-100 rounded-[2rem] p-8 text-center border-2 border-dashed border-neutral-200">
          <p className="text-neutral-500 font-bold mb-2 uppercase tracking-tighter">
            Scene unavailable
          </p>
          <p className="text-neutral-400 text-sm font-medium max-w-[200px]">
            Please ensure you have provided a valid public .splinecode URL.
          </p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-50/50 backdrop-blur-sm rounded-[2rem] border border-neutral-100 animate-pulse">
              <div className="w-12 h-12 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin mb-4" />
              <p className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">
                Loading 3D Scene
              </p>
            </div>
          }
        >
          <Spline 
            scene={scene} 
            className="w-full h-full" 
            onError={() => setHasError(true)}
          />
        </Suspense>
      )}
    </div>
  );
}
