import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 20,
          padding: 32,
          boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
          textAlign: "center",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <h1 style={{ marginTop: 0, color: "#b71c1c" }}>Projeto Semáforo</h1>
        <p style={{ color: "#6b7280", marginBottom: 24 }}>
          Acesse a tela de controle do semáforo.
        </p>

        <Link
          href="/semaforo"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "#b71c1c",
            color: "#fff",
            padding: "14px 18px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Abrir tela
        </Link>
      </div>
    </main>
  );
}