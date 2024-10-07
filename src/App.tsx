import { Thesis } from "./thesis/Thesis";
import { Title } from "./components/Title";
import { AuthorBlock } from "./components/Author";
import { Links } from "./components/Links";
import PaperAbstract from "./components/PaperAbstract.mdx";
import { UAVOverview } from "./components/UAVOverview";

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
      <div
        style={{
          maxWidth: "300mm",
          margin: "0 auto",
          fontFamily: "'Google Sans', sans-serif",
          lineHeight: "2.0",
          fontSize: "18px",
          padding: "15px 20px",
          backgroundColor: "#fafafa",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <UAVOverview />
      </div>
      <PaperAbstract />
      <Thesis />
    </div>
  );
}
