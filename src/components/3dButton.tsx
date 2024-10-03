import { config, animated, useSpringValue } from "@react-spring/three";
import {
  forwardRef,
  ReactNode,
  Suspense,
  useImperativeHandle,
  useRef,
} from "react";
import { Text, Root, Container } from "@react-three/uikit";
import { useFrame, type GroupProps } from "@react-three/fiber";
import { useSignal, useComputed } from "@preact/signals-react";

interface ButtonProps extends GroupProps {
  name: string;
  children: ReactNode;
  link?: string;
}

export function Button({ name, children, link, ...props }: ButtonProps) {
  const ySpring = useSpringValue(0);
  const xSpring = useSpringValue(0, {
    config: { tension: 600, friction: 10, clamp: true },
  });
  const yRotation = useSpringValue(0);
  const scale = useSpringValue(1);

  const warningMessageRef = useRef<WarningMessageRef>(null);

  return (
    <group {...props}>
      <animated.group
        position-y={ySpring}
        position-x={xSpring}
        scale={scale}
        rotation-y={yRotation}
        onPointerOver={() => scale.start(1.5)}
        onPointerOut={() => scale.start(1)}
        onClick={() => {
          if (link) {
            yRotation.start(2 * Math.PI, { config: config.slow }).then(() => {
              yRotation.start(0, { config: config.molasses });
              if (link.includes("#")) {
                window.location.hash = "";
                window.location.hash = link;
              } else {
                window.location.href = link;
              }
            });
          } else {
            // Shake the button.
            //@ts-expect-error There is some weirdness with the types here.
            xSpring.start([
              { to: 0.4, delay: 0 },
              { to: -0.4, delay: 0 },
              { to: 0.4, delay: 0 },
              { to: 0, delay: 0 },
            ]);
            warningMessageRef.current?.show();
          }
        }}
      >
        {children}
      </animated.group>
      <group position-y={-2}>
        <Suspense fallback={null}>
          <Root>
            <Container
              backgroundColor="#333"
              paddingX={50}
              paddingY={30}
              borderRadius={30}
            >
              <Text color="#f0f0f0" fontSize={100}>
                {name}
              </Text>
              <WarningMessage ref={warningMessageRef}>
                Coming Soon!
              </WarningMessage>
            </Container>
          </Root>
        </Suspense>
      </group>
    </group>
  );
}

interface WarningMessageProps {
  children: string;
}

interface WarningMessageRef {
  show: () => void;
}

const WarningMessage = forwardRef<WarningMessageRef, WarningMessageProps>(
  ({ children }, ref) => {
    const messageOpacity = useSignal(0);
    const messageOpacitySpring = useSpringValue(0);
    const positionY = useComputed(() => -messageOpacity.value * 300);
    const timerId = useRef<number | null>(null);

    useImperativeHandle(ref, () => ({
      show: () =>
        messageOpacitySpring.start(1).then(() => {
          if (timerId.current !== null) {
            clearTimeout(timerId.current);
          }
          timerId.current = setTimeout(
            () => messageOpacitySpring.start(0),
            2000,
          );
        }),
    }));

    useFrame(() => {
      // Sync the spring value with the signal value.
      messageOpacity.value = messageOpacitySpring.get();
    });

    return (
      <Container
        alignSelf="center"
        alignItems="center"
        positionType="absolute"
        transformTranslateZ={100}
        transformTranslateY={positionY}
        backgroundOpacity={messageOpacity}
        backgroundColor="#ff9900"
        paddingX={50}
        paddingY={30}
        borderRadius={30}
      >
        <Text opacity={messageOpacity} color="#f0f0f0" fontSize={100}>
          {children}
        </Text>
      </Container>
    );
  },
);
