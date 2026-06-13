function App() {
  const iniciarAnalise = () => {
    window.location.href = "/api/tesouro";
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b)",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.25)",
          textAlign: "center",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <h1
          style={{
            marginBottom: "10px",
            color: "#0f172a",
          }}
        >
          Análise de Wesley
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Tesouro Selic 2031
        </p>

        <button
          onClick={iniciarAnalise}
          style={{
            border: "none",
            cursor: "pointer",
            padding: "15px 30px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "white",
            background:
              "linear-gradient(135deg,#2563eb,#3b82f6)",
            transition: "0.3s",
          }}
        >
          Iniciar Análise
        </button>
      </div>
    </div>
  );
}

export default App;