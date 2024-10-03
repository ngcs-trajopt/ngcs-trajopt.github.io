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
    <div
      style={{
        fontFamily: "'Google Sans', sans-serif",
        fontSize: "1.2rem",
        textAlign: "center",
        marginTop: "1rem",
      }}
    >
      {authors.map((author: Author, index: number) => (
        <span key={index} style={{ marginRight: "0.5rem" }}>
          <a
            href={author.link}
            style={{
              color: "hsl(204, 86%, 53%)",
              textDecoration: "none",
            }}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => (e.target.style.textDecoration = "underline")}
            onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
          >
            {author.name}
          </a>
          {index < authors.length - 1 && ","}
        </span>
      ))}
      <div style={{ marginTop: "0.5rem" }}>
        {affiliation}
        <br />
        {note}
      </div>
    </div>
  );
}
