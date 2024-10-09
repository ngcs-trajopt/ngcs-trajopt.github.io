import { animated, useSpring } from "@react-spring/web";

type Author = {
  name: string;
  link?: string;
};

interface AuthorBlockProps {
  authors: Author[];
  affiliation: string;
  note: string;
}

export function AuthorBlock({ authors, affiliation, note }: AuthorBlockProps) {
  const authorSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-20px) scale(0.0)" },
    to: { opacity: 1, transform: "translateY(0) scale(1)" },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  const affiliationSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
    delay: 400,
  });
  return (
    <div className="font-sans text-lg text-center mt-4">
      <animated.div style={authorSpring}>
        {authors.map((author: Author, index: number) => (
          <span key={index} className="mr-2">
            <a
              href={author.link}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "underline")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.textDecoration = "none")
              }
            >
              {author.name}
            </a>
            {index < authors.length - 1 && ","}
          </span>
        ))}
      </animated.div>
      <animated.div style={affiliationSpring} className="mt-4 text-gray-700">
        <div className="font-semibold">{affiliation}</div>
        <div className="italic">{note}</div>
      </animated.div>
    </div>
  );
}
