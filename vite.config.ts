import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlugCustomId from "rehype-slug-custom-id";
import rehypeSlug from "rehype-slug";
import rehypeFigure from "rehype-figure";
import rehypeCitation from "rehype-citation";
import {
  createBibliography,
  extractCitationsFromBibtex,
} from "./src/extractCitations";

export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkMath, remarkGfm],
        rehypePlugins: [
          rehypeKatex,
          rehypeSlug,
          rehypeSlugCustomId,
          rehypeAutolinkHeadings,
          rehypeFigure,
          [
            rehypeCitation,
            {
              bibliography: "./src/thesis/references.bib",
              suppressBibliography: false,
              linkCitations: true,
              csl: "./src/thesis/ieee.csl",
              noCite: extractCitationsFromBibtex("./src/thesis/references.bib"),
            },
          ],
          createBibliography,
        ],
      }),
    },
    react(),
  ],
});
