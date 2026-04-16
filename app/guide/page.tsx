import Link from "next/link";
import { chapters } from "./data";

export default function GuidePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f4edd8",
        color: "#2f2418",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 80px" }}>
        <div
          style={{
            fontSize: 12,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "#8b6b4a",
          }}
        >
          Tongjian Narrative Edition
        </div>
        <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "12px 0 16px", color: "#1c1208" }}>
          第一卷 · 战国
        </h1>
        <p style={{ maxWidth: 680, color: "#6e5a42", lineHeight: 1.8, marginBottom: 32 }}>
          以下内容以《资治通鉴》《史记》为骨架，采用小说化叙事重述，但不改动关键人物、时间线与历史结果。先上线前五回，后续可以继续扩写。
        </p>

        <div
          style={{
            background: "#fffaf0",
            border: "1px solid #dbc9aa",
            padding: "24px 24px 16px",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(60,40,20,.05)",
          }}
        >
          {chapters.map((chapter) => (
            <div
              key={chapter.slug}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                padding: "14px 0",
                borderBottom: "1px solid #eadcc4",
              }}
            >
              <Link
                href={`/guide/${chapter.slug}`}
                style={{ textDecoration: "none", color: "#2f2418", fontWeight: 700 }}
              >
                {chapter.number} · {chapter.title}
              </Link>
              <span style={{ fontSize: 13, color: "#8b6b4a", whiteSpace: "nowrap" }}>
                {chapter.subtitle}
              </span>
            </div>
          ))}
        </div>

        <Link href="/" style={{ display: "inline-block", marginTop: 28, color: "#8b6b4a", textDecoration: "none" }}>
          ← 返回首页
        </Link>
      </div>
    </main>
  );
}
