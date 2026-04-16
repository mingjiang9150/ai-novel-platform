import Link from "next/link";
import { notFound } from "next/navigation";
import { chapters, getChapterBySlug } from "../data";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const currentIndex = chapters.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? chapters[currentIndex - 1] : null;
  const next = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4edd8",
        color: "#2f2418",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 24px 100px" }}>
        <div style={{ marginBottom: 20 }}>
          <Link href="/guide" style={{ color: "#8b6b4a", textDecoration: "none" }}>
            ← 返回目录
          </Link>
        </div>

        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8b6b4a",
          }}
        >
          {chapter.era}
        </div>
        <h1 style={{ fontSize: 42, lineHeight: 1.15, color: "#1c1208", margin: "14px 0 8px" }}>
          {chapter.number} · {chapter.title}
        </h1>
        <div
          style={{
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8b6b4a",
            marginBottom: 20,
          }}
        >
          {chapter.subtitle}
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            flexWrap: "wrap",
            padding: "12px 0",
            borderTop: "2px solid #2f2418",
            borderBottom: "1px solid #d9c8aa",
            marginBottom: 28,
            fontSize: 13,
            color: "#6e5a42",
          }}
        >
          <span>时间：{chapter.period}</span>
          <span>主题：{chapter.subtitle}</span>
        </div>

        <p style={{ color: "#6e5a42", lineHeight: 1.8, marginBottom: 28 }}>{chapter.summary}</p>

        <article>
          {chapter.content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                margin: "0 0 1.2em",
                textIndent: index === 0 ? 0 : "2em",
                lineHeight: 2,
                fontSize: 18,
              }}
            >
              {paragraph}
            </p>
          ))}
        </article>

        <div
          style={{
            marginTop: 42,
            padding: 22,
            background: "#e8dcc0",
            borderTop: "2px solid #2f2418",
            color: "#4e3c29",
            lineHeight: 1.8,
          }}
        >
          {chapter.footnote}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 28, gap: 16 }}>
          <div>
            {prev ? (
              <Link href={`/guide/${prev.slug}`} style={{ color: "#8b6b4a", textDecoration: "none" }}>
                ← 上一回
              </Link>
            ) : null}
          </div>
          <div>
            {next ? (
              <Link href={`/guide/${next.slug}`} style={{ color: "#8b6b4a", textDecoration: "none" }}>
                下一回 →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}
