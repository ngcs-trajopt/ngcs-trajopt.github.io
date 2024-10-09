import { animated, useSpring } from "@react-spring/web";
import { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren) {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.h1
      style={animationProps}
      className="font-sans text-4xl font-bold text-gray-800 text-center my-5 leading-tight"
    >
      {children}
    </animated.h1>
  );
}
