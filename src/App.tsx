import { Thesis } from "./thesis/Thesis";
import { Title } from "./components/Title";
import { AuthorBlock } from "./components/Author";
import { Links } from "./components/Links";
import PaperAbstract from "./components/PaperAbstract.mdx";
import { UAVOverview } from "./components/UAVOverview";
import { ThesisProvider } from "./thesis/ThesisContext";

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
        <Links />
        <div className="max-w-[300mm] mx-auto font-sans leading-loose text-lg p-4 bg-gray-50 shadow-md rounded-lg mb-5">
          <UAVOverview />
        </div>
        <PaperAbstract />
        <Thesis />
      </div>
    </ThesisProvider>
  );
}
