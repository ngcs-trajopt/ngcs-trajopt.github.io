import { Suspense, useState } from "react";

export function UAVOverview({ ...props }) {
  return (
    <div style={{ position: "relative", userSelect: "none" }} {...props}>
      <Suspense fallback={null}>
        <img
          src="figures/uav/Drones.png"
          style={{ background: "white", width: "100%", height: "100%" }}
        />
        <HoverableGif
          src="figures/uav/drones_corner.gif"
          style={{
            width: "26%",
            right: "0.5%",
            top: "57.5%",
          }}
        />
        <HoverableGif
          src="figures/uav/drones_final.gif"
          style={{
            width: "26%",
            right: "0.5%",
            top: "1%",
          }}
        />
        <HoverableGif
          src="figures/uav/drones_ngcs_start.gif"
          style={{
            width: "26.5%",
            left: "0.5%",
            top: "2%",
          }}
        />
        <HoverableGif
          src="figures/uav/drones_blue_start.gif"
          style={{
            width: "26%",
            scale: "1.02 1",
            left: "0.8%",
            top: "57.5%",
          }}
        />
      </Suspense>
    </div>
  );
}

interface HoverableGifProps {
  src: string;
  style: React.CSSProperties;
}

function HoverableGif({ src, style }: HoverableGifProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        ...style,
        position: "absolute",
        boxShadow: "none",
        lineHeight: 0,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          userSelect: "none",
          backgroundColor: "#565151",
          opacity: isHovered && !isClicked ? 0.5 : isClicked ? 1 : 0,
          cursor: "pointer",
          transition: "opacity 0.3s",
          borderRadius: "2%",
          padding: "2%",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <img
          style={{
            borderRadius: "1.5%",
            transition: "opacity 0.3s",
            opacity: isClicked ? 1 : 0,
            userSelect: "none",
            boxSizing: "border-box",
          }}
          src={src}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>
    </div>
  );
}
