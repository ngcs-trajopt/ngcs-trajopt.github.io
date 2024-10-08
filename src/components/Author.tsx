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
  return (
    <div className="font-sans text-lg text-center mt-4">
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
      <div className="mt-4 text-gray-700">
        <div className="font-semibold">{affiliation}</div>
        <div className="italic">{note}</div>
      </div>
    </div>
  );
}
