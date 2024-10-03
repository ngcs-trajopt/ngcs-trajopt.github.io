import { visit } from "unist-util-visit";
import fs from "fs";
import path from "path";

const citations: Element[] = [];

export function createBibliography() {
  return (tree: any) => {
    visit(tree, "element", (node, idx, parent) => {
      if (
        node.tagName === "div" &&
        node.properties &&
        node.properties.id === "refs"
      ) {
        citations.push(node);
        parent.children.splice(idx, 1);
      }
    });
    visit(tree, "text", (node, idx, parent) => {
      if (node.value === "[^bib]") {
        // Since we include all citations from the bibtex file, we can just use the first one.
        parent.children.push(citations[0]);
        // Remove the [^bib] text node.
        parent.children.splice(idx, 1);
      }
    });
  };
}

export function extractCitationsFromBibtex(bibtexPath: string) {
  const bibtexContent = fs.readFileSync(path.resolve(bibtexPath), "utf-8");
  const citationPattern = /@(\w+)\{([^,]+),/g;
  const citations = [];
  let match;

  while ((match = citationPattern.exec(bibtexContent)) !== null) {
    citations.push(`@${match[2]}`);
  }

  return citations;
}
