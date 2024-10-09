import React, { Suspense, useState } from "react";

interface IframeSwitchProps {
  src: string;
  height?: string;
  children: React.ReactNode;
}

export function IframeSwitch({ src, height, children }: IframeSwitchProps) {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-around">
      {showIframe ? (
        <>
          <button
            className="absolute top-2.5 left-2.5 px-5 py-2.5 bg-red-600 text-white border-none rounded cursor-pointer z-10 hover:bg-red-700"
            onClick={() => setShowIframe(false)}
          >
            Back
          </button>
          <div className="w-full h-full flex justify-center items-center">
            <Suspense fallback={<div>Loading...</div>}>
              <iframe
                src={src}
                className="w-full h-full border-none"
                style={{ height }}
              />
            </Suspense>
          </div>
        </>
      ) : (
        <>
          <button
            className="absolute top-2.5 right-2.5 px-5 py-2.5 bg-blue-600 text-white border-none rounded cursor-pointer z-10 hover:bg-blue-700"
            onClick={() => setShowIframe(true)}
          >
            Interactive Demo
          </button>
          {children}
        </>
      )}
    </div>
  );
}
