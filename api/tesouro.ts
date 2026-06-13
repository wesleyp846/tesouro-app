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

  const textos: string[] = [];

  $("strong").each((_, el) => {
    const texto = $(el).text().trim();

    if (texto) {
      textos.push(texto);
    }
  });

  res.status(200).json({
    encontrados: textos.slice(0, 50)
  });
}