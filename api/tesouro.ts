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

  res.status(200).json({
    tamanhoHtml: html.length,
    titulo: $("h1").first().text(),
  });
}