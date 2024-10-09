import { Title } from "./components/Title";
import { AuthorBlock } from "./components/Author";
import PaperAbstract from "./components/PaperAbstract.mdx";
import { ThesisProvider } from "./thesis/ThesisContext";
import { lazy, Suspense } from "react";
import { FrontPageCarousel } from "./components/FrontPageCarousel";

const Links = lazy(() => import("./components/Links"));
const Thesis = lazy(() => import("./thesis/Thesis"));

export default function App() {
  const authors = [
    { name: "David von Wrangel", link: "https://davidvonwrangel.com/" },
    {
      name: "Russ Tedrake",
      link: "https://groups.csail.mit.edu/locomotion/russt.html",
    },
  ];
  return (
    <ThesisProvider>
      <div className="bg-[#f0f0f0] p-5">
        <Title>
          Using Graphs of Convex Sets to Guide Nonconvex Trajectory Optimization
        </Title>
        <AuthorBlock
          authors={authors}
          affiliation="Massachusetts Institute of Technology"
          note="IROS 2024"
        />
        <Suspense fallback={null}>
          <Links />
        </Suspense>
        <FrontPageCarousel />
        <PaperAbstract />
        <Suspense fallback={null}>
          <Thesis />
        </Suspense>
      </div>
    </ThesisProvider>
  );
}
