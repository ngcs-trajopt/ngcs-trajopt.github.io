import { type ReactNode, useState } from "react";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";

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
      <div className="flex justify-between items-center my-2 select-none">
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
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "scale(0.9)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={springProps}
      className={`p-2 bg-[#333] transition-opacity duration-500 border-0 rounded-md ${
        disabled ? "opacity-0 pointer-events-none" : "opacity-100"
      } hover:bg-[#595959]`}
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
  const springProps = useSpring({
    transform: isActive ? "scale(1.5)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={springProps}
      className={`h-2 w-2 rounded-full mx-1 ${
        isActive ? "bg-gray-800" : "bg-gray-400"
      }`}
    />
  );
}
