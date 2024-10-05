import { visit } from "unist-util-visit";

// This function removes the katex-html elements from the tree.
// katex-html elements are added with aria-hidden, however that doesn't
// work reliably for many browsers.
export function removeKatexHtml() {
  return (tree: any) => {
    visit(tree, "element", (node, idx, parent) => {
      if (
        node.properties &&
        node.properties.className &&
        node.properties.className.includes("katex-html")
      ) {
        parent.children.splice(idx, 1);
      }
    });
  };
}
