import * as
 cheerio from "cheerio";

export default async function handler(
  req: any,
  res: any
) {
  try {
    const response = await fetch(
      "https://statusinvest.com.br/tesouro/tesouro-selic-2031"
    );

    const html = await response.text();

    const $ = cheerio.load(html);

    const dados: string[] = [];

    $("strong").each((_, el) => {
      const texto = $(el).text().trim();

      if (texto) {
        dados.push(texto);
      }
    });

    res.setHeader(
      "Content-Type",
      "text/html; charset=utf-8"
    );

    res.status(200).send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>Análise de Wesley</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Inter,Segoe UI,Arial,sans-serif;
  min-height:100vh;
  background:linear-gradient(
    135deg,
    #0f172a,
    #1e293b
  );
  display:flex;
  justify-content:center;
  align-items:center;
  padding:30px;
}

.card{
  width:100%;
  max-width:800px;
  background:white;
  border-radius:20px;
  padding:30px;
  box-shadow:0 20px 50px rgba(0,0,0,.25);
}

h1{
  color:#0f172a;
  margin-bottom:10px;
}

.subtitulo{
  color:#64748b;
  margin-bottom:30px;
}

.grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:15px;
}

.item{
  background:#f8fafc;
  border:1px solid #e2e8f0;
  padding:18px;
  border-radius:12px;
}

.label{
  color:#64748b;
  font-size:14px;
}

.valor{
  margin-top:8px;
  font-size:22px;
  font-weight:bold;
  color:#0f172a;
}

.footer{
  margin-top:25px;
  color:#64748b;
  font-size:13px;
}

.botao{
  display:inline-block;
  margin-top:25px;
  padding:12px 20px;
  border-radius:12px;
  text-decoration:none;
  background:linear-gradient(
    135deg,
    #2563eb,
    #3b82f6
  );
  color:white;
  font-weight:bold;
}

.botao:hover{
  opacity:.9;
}

@media(max-width:700px){
  .grid{
    grid-template-columns:1fr;
  }
}
</style>

</head>

<body>

<div class="card">

<h1>Análise de Wesley</h1>

<p class="subtitulo">
Tesouro Selic 2031
</p>

<div class="grid">

<div class="item">
<div class="label">Valor de Venda</div>
<div class="valor">
${dados[0] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">Valor Base</div>
<div class="valor">
${dados[1] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">Rentabilidade</div>
<div class="valor">
${dados[3] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">Indexador</div>
<div class="valor">
${dados[5] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">Vencimento</div>
<div class="valor">
${dados[6] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">SELIC Atual</div>
<div class="valor">
${dados[7] ?? "N/D"}%
</div>
</div>

<div class="item">
<div class="label">Valor de Compra</div>
<div class="valor">
${dados[8] ?? "N/D"}
</div>
</div>

<div class="item">
<div class="label">Atualização</div>
<div class="valor">
${new Date().toLocaleDateString("pt-BR")}
</div>
</div>

</div>

<div class="footer">
Dados obtidos automaticamente da página pública do
Status Invest.
</div>

<a href="/" class="botao">
← Voltar
</a>

</div>

</body>
</html>
`);
  } catch (error: any) {
    res.status(500).json({
      erro: error?.message ?? "Erro desconhecido"
    });
  }
}
