import { useEffect, useState } from "react";

type Tesouro = {
  titulo: string;
  taxa: number;
  pu: number;
  atualizacao: string;
};

function App() {
  const [dados, setDados] = useState<Tesouro | null>(null);

  useEffect(() => {
    async function carregar() {
      const response = await fetch("/api/tesouro");
      const json = await response.json();

      setDados(json);
    }

    carregar();
  }, []);

  if (!dados) {
    return <p>Carregando...</p>;
  }

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
      <h1>{dados.titulo}</h1>

      <p>
        <strong>Taxa:</strong> {dados.taxa}% a.a.
      </p>

      <p>
        <strong>PU:</strong>{" "}
        {dados.pu.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>

      <p>
        <strong>Atualização:</strong>{" "}
        {dados.atualizacao}
      </p>
    </div>
  );
}

export default App;