import React, { ReactChild } from "react";

export function MyCell({
  children,
  minHeight,
}: {
  children: ReactChild;
  minHeight: string;
}) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "white",
        padding: "20px",
        minHeight: minHeight,
        width: "100%",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
}
