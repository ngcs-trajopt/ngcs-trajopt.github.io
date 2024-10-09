import { type ReactNode, useEffect, useState } from "react";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import { animated, useSpringValue } from "@react-spring/web";

interface CarouselProps {
  children: ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, children.length - 1),
    );
  }

  return (
    <div className="relative w-full overflow-hidden">
      <SlidesContainer currentIndex={currentIndex}>{children}</SlidesContainer>
      <div className="flex justify-between items-center my-2 mx-2 select-none">
        <ArrowButton
          direction="left"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        />
        <ProgressBar currentIndex={currentIndex} total={children.length} />
        <ArrowButton
          direction="right"
          onClick={nextSlide}
          disabled={currentIndex === children.length - 1}
        />
      </div>
    </div>
  );
}

interface SlidesContainerProps {
  currentIndex: number;
  children: React.ReactNode[];
}

function SlidesContainer({ currentIndex, children }: SlidesContainerProps) {
  return (
    <div
      className="flex transition-transform duration-500 items-center"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {children.map((child, index) => (
        <div key={index} className="w-full flex-shrink-0">
          {child}
        </div>
      ))}
    </div>
  );
}

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}

function ArrowButton({ direction, onClick, disabled }: ArrowButtonProps) {
  const transform = useSpringValue("scale(0.0)", {
    config: { tension: 300, friction: 10 },
  });

  useEffect(() => {
    if (disabled) {
      transform.start("scale(0.0)", { config: { clamp: true } });
    } else {
      transform.start("scale(1)", { config: { clamp: false } });
    }
  }, [disabled, transform]);

  return (
    <animated.button
      onClick={() => !disabled && onClick()}
      onMouseEnter={() => !disabled && transform.start("scale(0.9)")}
      onMouseLeave={() => !disabled && transform.start("scale(1)")}
      style={{ transform }}
      className={`p-2 bg-[#333] transition-opacity duration-500 border-0 rounded-md hover:bg-[#595959]`}
    >
      {direction === "left" ? (
        <ChevronLeftSquare className="text-gray-50" />
      ) : (
        <ChevronRightSquare className="text-gray-50" />
      )}
    </animated.button>
  );
}

interface ProgressBarProps {
  currentIndex: number;
  total: number;
}

function ProgressBar({ currentIndex, total }: ProgressBarProps) {
  return (
    <div className="flex justify-center">
      {Array.from({ length: total }).map((_, index) => (
        <AnimatedDot key={index} isActive={index === currentIndex} />
      ))}
    </div>
  );
}

interface AnimatedDotProps {
  isActive: boolean;
}

function AnimatedDot({ isActive }: AnimatedDotProps) {
  const transform = useSpringValue("scale(0)", {
    config: { tension: 300, friction: 10 },
  });
  transform.start("scale(1)");
  useEffect(() => {
    if (isActive) {
      transform.start("scale(1.5)");
    } else {
      transform.start("scale(1)");
    }
  }, [isActive, transform]);

  return (
    <animated.div
      style={{ transform }}
      className={`h-2 w-2 rounded-full mx-1 ${
        isActive ? "bg-gray-800" : "bg-gray-400"
      }`}
    />
  );
}
