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
import { useThesis } from "./ThesisContext";

const chapters = [Chapter1, Chapter2, Chapter3, Chapter4, Chapter5];
export default function Thesis() {
  const { isVisible } = useThesis();

  if (!isVisible) {
    return null;
  }
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
        <div className="leading-relaxed">
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
    <div className="max-w-[210mm] bg-white p-10 md:p-[110px] font-serif text-lg shadow-md rounded-lg mb-5 mx-auto leading-loose">
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
  return <p className="text-justify indent-8 mb-[-12px]">{props.children}</p>;
}

function Chapter({ num }: { num: number }) {
  return <h1 className="mt-18 mb-12">Chapter {num}</h1>;
}
function CustomH1(props: PropsWithChildren) {
  return <h1 className="mb-12 whitespace-pre-wrap">{props.children}</h1>;
}

function CustomH2(props: PropsWithChildren) {
  return (
    <h2 className="mt-10 mb-[-5px] whitespace-pre-wrap">{props.children}</h2>
  );
}

function CustomH3(props: PropsWithChildren) {
  return (
    <h3 className="mt-10 mb-[-5px] whitespace-pre-wrap">{props.children}</h3>
  );
}
