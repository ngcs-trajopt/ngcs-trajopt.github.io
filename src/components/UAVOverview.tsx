import { Suspense, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export function UAVOverview({ ...props }) {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div
      style={fade}
      className={`${props.className} relative select-none`}
      {...props}
    >
      <Suspense fallback={null}>
        <img src="figures/uav/Drones.png" className="bg-white w-full h-full" />
        <HoverableGif
          src="figures/uav/drones_corner.gif"
          className="absolute w-[26%] right-[0.5%] top-[57.5%]"
        />
        <HoverableGif
          src="figures/uav/drones_final.gif"
          className="absolute w-[26%] right-[0.5%] top-[1%]"
        />
        <HoverableGif
          src="figures/uav/drones_ngcs_start.gif"
          className="absolute w-[26.5%] left-[0.5%] top-[2%]"
        />
        <HoverableGif
          src="figures/uav/drones_blue_start.gif"
          className="absolute w-[27%] scale-[1.05] left-[0.4%] top-[56.6%]"
        />
      </Suspense>
    </animated.div>
  );
}

interface HoverableGifProps {
  src: string;
  className: string;
}

function HoverableGif({ src, className }: HoverableGifProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className={`${className} shadow-none leading-none box-border`}>
      <div
        className={`select-none bg-[#565151] cursor-pointer transition-opacity duration-300 rounded-[2%] p-[2%] box-border w-full h-full ${
          isHovered && !isClicked
            ? "opacity-50"
            : isClicked
              ? "opacity-100"
              : "opacity-0"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsClicked(!isClicked)}
      >
        <img
          className={`rounded-[1.5%] transition-opacity duration-300 box-border w-full h-auto ${
            isClicked ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>
    </div>
  );
}
