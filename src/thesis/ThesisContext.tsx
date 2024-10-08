import { createContext, useContext, useState, ReactNode } from "react";

interface ThesisContextType {
  isVisible: boolean;
  showThesis: () => void;
}

const ThesisContext = createContext<ThesisContextType>({
  isVisible: false,
  showThesis: () => {},
});

export const ThesisProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showThesis = () => {
    console.log('showThesis');
    setIsVisible(true);
  };

  return (
    <ThesisContext.Provider value={{ isVisible, showThesis }}>
      {children}
    </ThesisContext.Provider>
  );
};

export function useThesis() {
  const context = useContext(ThesisContext);
  if (!context) {
    throw new Error("useThesis must be used within a ThesisProvider");
  }
  return context;
}
