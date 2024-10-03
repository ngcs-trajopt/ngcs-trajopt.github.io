import Content from "./Content.mdx";
import Acknowledgments from "./Acknowledgments.mdx";
import Chapter1 from "./Chapter1.mdx";
import Chapter2 from "./Chapter2.mdx";
import Chapter3 from "./Chapter3.mdx";
import Chapter4 from "./Chapter4.mdx";
import Chapter5 from "./Chapter5.mdx";
import TitlePage from "./TitlePage.mdx";
import AbstractPage from "./AbstractPage.mdx";
import References from "./References.mdx";
import { type PropsWithChildren } from "react";

const chapters = [Chapter1, Chapter2, Chapter3, Chapter4, Chapter5];
export function Thesis() {
  return (
    <div id="Thesis">
      <A4Paper>
        <TitlePage />
      </A4Paper>
      <A4Paper>
        <AbstractPage />
      </A4Paper>
      <A4Paper>
        <Content />
      </A4Paper>
      <A4Paper>
        <div style={{ lineHeight: "1.5" }}>
          <Acknowledgments components={{ p: CustomParagraph }} />
        </div>
      </A4Paper>
      {chapters.map((ChapterComponent, index) => (
        <A4Paper key={index}>
          <Chapter num={index + 1} />
          <ChapterComponent
            components={{
              h1: CustomH1,
              h2: CustomH2,
              h3: CustomH3,
              p: CustomParagraph,
            }}
          />
        </A4Paper>
      ))}
      <A4Paper>
        <References />
      </A4Paper>
    </div>
  );
}

function A4Paper({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        maxWidth: "210mm",
        margin: "0 auto",
        fontFamily: "'Lucida Bright', 'Source Serif Pro', serif",
        lineHeight: "2.0",
        fontSize: "18px",
        padding: "110px",
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <style>
        {`
                    a {
                        text-decoration: none;
                        color: #1a0dab;
                        font-weight: 600;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    img {
                        max-width: 100%;
                    }
                `}
      </style>
      {children}
    </div>
  );
}

function CustomParagraph(props: PropsWithChildren) {
  return (
    <p
      style={{ textAlign: "justify", textIndent: "2em", marginBottom: "-12px" }}
    >
      {props.children}
    </p>
  );
}

function Chapter({ num }: { num: number }) {
  return (
    <h1 style={{ marginTop: "90px", marginBottom: "50px" }}>Chapter {num}</h1>
  );
}
function CustomH1(props: PropsWithChildren) {
  return (
    <h1 style={{ marginBottom: "50px", whiteSpace: "pre-wrap" }}>
      {props.children}
    </h1>
  );
}

function CustomH2(props: PropsWithChildren) {
  return (
    <h2
      style={{
        marginTop: "40px",
        marginBottom: "-5px",
        whiteSpace: "pre-wrap",
      }}
    >
      {props.children}
    </h2>
  );
}

function CustomH3(props: PropsWithChildren) {
  return (
    <h3
      style={{
        marginTop: "40px",
        marginBottom: "-5px",
        whiteSpace: "pre-wrap",
      }}
    >
      {props.children}
    </h3>
  );
}
