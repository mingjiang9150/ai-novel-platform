export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      backgroundColor: "#f5f5f5"
    }}>
      <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
        AI 小说平台
      </h1>

      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        这是我的第一个 AI 驱动小说产品 🚀
      </p>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer"
        }}
      >
        进入平台
      </button>
    </main>
  );
}