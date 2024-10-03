import { Thesis } from "./thesis/Thesis";
import { Title } from "./components/Title";
import { AuthorBlock } from "./components/Author";
import { Links } from "./components/Links";
import PaperAbstract from "./components/PaperAbstract.mdx";

export default function App() {
  const authors = [
    { name: "David von Wrangel", link: "https://davidvonwrangel.com/" },
    {
      name: "Russ Tedrake",
      link: "https://groups.csail.mit.edu/locomotion/russt.html",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <Title>
        Using Graphs of Convex Sets to Guide Nonconvex Trajectory Optimization
      </Title>
      <AuthorBlock
        authors={authors}
        affiliation="Massachusetts Institute of Technology"
        note="IROS 2024"
      />
      <Links />
      <PaperAbstract />
      <Thesis />
    </div>
  );
}
