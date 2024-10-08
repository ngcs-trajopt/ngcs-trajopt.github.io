import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  return (
    <h1 className="font-sans text-4xl font-bold text-gray-800 text-center my-5 leading-tight">
      {children}
    </h1>
  );
}
