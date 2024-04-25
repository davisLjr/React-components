import { Children, Class } from "@/utils/utils";
import React, { CSSProperties } from "react";

export type SkeletonProps = {
  isLoaded?: boolean;
  styles?: CSSProperties;
} & Children & Class;

export const defaultStyles: CSSProperties = {
  animation: "loading 2s infinite ease-in-out",
  background: "linear-gradient(90deg, #EEEEEE 25%, #dadada 50%, #EEEEEE)",
  backgroundSize: "200% 100%",
  pointerEvents: "none",
  userSelect: "none",
  overflow: "hidden",
  cursor: "default",
  color: "transparent"
};

export const keyframes = `@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}`;

export default function Skeleton ({ styles, children, isLoaded = false }: SkeletonProps) {
  const mergedStyles: CSSProperties = isLoaded ? {} : { ...defaultStyles, ...styles };
  return (
    <div style={mergedStyles} data-is-loaded={isLoaded}>
      {isLoaded ? children : null}
      <style>{keyframes}</style>
    </div>
  )
};
