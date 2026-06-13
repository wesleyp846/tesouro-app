function App() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1>Tesouro Selic 2031</h1>

      <p>
        <strong>Taxa:</strong> 14,50% a.a.
      </p>

      <p>
        <strong>Preço Unitário:</strong> R$ 16.782,34
      </p>

      <p>
        <strong>Atualização:</strong> 13/06/2026
      </p>
    </div>
  );
}

export default App;import { useEffect, useState } from "react";

function App() {
  const [mensagem, setMensagem] = useState("Carregando...");

  useEffect(() => {
    async function carregar() {
      const response = await fetch("/api/tesouro");
      const data = await response.json();

      setMensagem(data.mensagem);
    }

    carregar();
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1>Tesouro Selic 2031</h1>

      <p>{mensagem}</p>
    </div>
  );
}

export default App;