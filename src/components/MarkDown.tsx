import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import type { SyntaxHighlighterProps } from 'react-syntax-highlighter';
import remarkGfm from "remark-gfm";

interface Props {
  markdownText: string;
}

const markdownStyles: React.CSSProperties = {
  maxWidth: "800px",
  margin: "0 auto",
  lineHeight: 1.7,
  color: "#FFFFFF",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif",
  fontSize: "16px",
  wordBreak: "break-word",
  overflowWrap: "break-word",
  whiteSpace: "normal",
};

const components: Components = {
  p: ({ children, ...props }) => (
    <p
      style={{
        marginBottom: "24px",
        lineHeight: 1.7,
        fontSize: "16px",
        color: "#FFF3FF",
      }}
      {...props}
    >
      {children}
    </p>
  ),
  h1: ({ children, ...props }) => (
    <h1
      style={{
        fontSize: "32px",
        fontWeight: 600,
        marginBottom: "24px",
        marginTop: "48px",
        color: "#FFFFFF",
        lineHeight: 1.3,
        borderBottom: "2px solid #e5e5e5",
        paddingBottom: "12px",
      }}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      style={{
        fontSize: "24px",
        fontWeight: 600,
        marginBottom: "20px",
        marginTop: "40px",
        color: "#",
        lineHeight: 1.4,
      }}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      style={{
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "16px",
        marginTop: "32px",
        color: "#FFFFFF",
        lineHeight: 1.4,
      }}
      {...props}
    >
      {children}
    </h3>
  ),
  ul: ({ children, ...props }) => (
    <ul
      style={{
        marginLeft: "24px",
        marginBottom: "24px",
        paddingLeft: "8px",
      }}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      style={{
        marginLeft: "24px",
        marginBottom: "24px",
        paddingLeft: "8px",
      }}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li
      style={{
        marginBottom: "8px",
        lineHeight: 1.6,
        color: "#FFFFFF",
      }}
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      style={{
        borderLeft: "4px solid #d1d5db",
        paddingLeft: "20px",
        marginLeft: "0",
        marginBottom: "24px",
        fontStyle: "italic",
        color: "#6b7280",
        padding: "16px 20px",
        borderRadius: "8px",
      }}
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div style={{ overflowX: "auto", marginBottom: "24px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      style={{
        padding: "12px 16px",
        backgroundColor: "#f3f4f6",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "left",
        fontWeight: 600,
        color: "#1f2937",
      }}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td
      style={{
        padding: "6px 10px",
        border: "1px solid #e5e7eb",
        color: "#FFFFFF",
        backgroundColor: "#1f2937",
      }}
      {...props}
    >
      {children}
    </td>
  ),
  hr: ({ ...props }) => (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid #e5e7eb",
        margin: "32px 0",
        backgroundColor: "transparent",
      }}
      {...props}
    />
  ),
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      style={{
        color: "#2563eb",
        textDecoration: "none",
        borderBottom: "1px solid transparent",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderBottomColor = "#2563eb";
        e.currentTarget.style.color = "#1d4ed8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderBottomColor = "transparent";
        e.currentTarget.style.color = "#2563eb";
      }}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }) => (
    <strong
      style={{
        fontWeight: 600,
        color: "#",
      }}
      {...props}
    >
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em
      style={{
        fontStyle: "italic",
        color: "#FFFFFF",
      }}
      {...props}
    >
      {children}
    </em>
  ),
  code({
    inline,
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    inline?: boolean;
    children?: React.ReactNode;
  }) {
    const match = /language-(\w+)/.exec(className || "");
    const codeString = Array.isArray(children)
      ? children.join("")
      : String(children ?? "");

    return !inline && match ? (
      <div style={{ marginBottom: "24px" }}>
        <SyntaxHighlighter
          language={match[1]}
          PreTag="div"
          {...(props as SyntaxHighlighterProps)}
        >
          {codeString.replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code
        style={{
          backgroundColor: "#f3f4f6",
          color: "#dc2626",
          padding: "3px 6px",
          borderRadius: "6px",
          fontSize: "14px",
          fontFamily:
            "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace",
          border: "1px solid #e5e7eb",
        }}
        {...props}
      >
        {codeString}
      </code>
    );
  },
};

const MarkdownRenderer: React.FC<Props> = ({ markdownText }) => {
  return (
    <div style={markdownStyles}>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {markdownText}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
