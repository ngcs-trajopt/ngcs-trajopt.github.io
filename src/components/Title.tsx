import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <h1
      style={{
        fontFamily: "'Google Sans', sans-serif",
        fontSize: "2.5em",
        fontWeight: "bold",
        color: "#333",
        textAlign: "center",
        margin: "20px 0",
        lineHeight: "1.2",
      }}
    >
      {children}
    </h1>
  );
}
