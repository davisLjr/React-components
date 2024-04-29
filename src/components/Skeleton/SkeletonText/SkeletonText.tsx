import React, { CSSProperties } from "react";
import { SkeletonProps, keyframes, defaultStyles } from "../Skeleton";

export default function SkeletonText ({ styles, children, isLoaded = false, className }: SkeletonProps) {
  const mergedStyles: CSSProperties = isLoaded ? {} : { ...defaultStyles, ...styles };

  return <div style={mergedStyles} data-is-loaded={isLoaded} className={className}>{children} <style>{keyframes}</style></div>;
};
