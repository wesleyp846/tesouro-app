import * as cheerio from "cheerio";

export default async function handler(
  req: any,
  res: any
) {
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

  res.status(200).json({
  titulo: "Tesouro Selic 2031",
  valorVenda: dados[0] ?? "N/D",
  valorCompra: dados[8] ?? "N/D",
  taxaProjetada: dados[3] ?? "N/D",
  indexador: dados[5] ?? "N/D",
  vencimento: dados[6] ?? "N/D",
  selicAtual: dados[7] ?? "N/D",
  atualizadoEm: new Date().toLocaleString("pt-BR"),
});
}