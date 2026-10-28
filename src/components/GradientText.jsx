
import React from "react";

export default function GradientText({
  children,
  className = "",
}) {
  return (
    <span
      className={`bg-gradient-to-r from-[#beadff] to-[#ff38bb] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
