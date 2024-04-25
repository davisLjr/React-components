
import React, { CSSProperties } from "react";
import { SkeletonProps, keyframes, defaultStyles } from "../Skeleton";

export default function SkeletonCircle ({ styles, children, isLoaded = false }: SkeletonProps) {
  const mergedStyles: CSSProperties = isLoaded ? {} : { ...defaultStyles, ...styles, borderRadius: "50%" };

  return (
    <div style={mergedStyles} data-is-loaded={isLoaded}>
      {children}
      <style>{keyframes}</style>
    </div>
  );
}
