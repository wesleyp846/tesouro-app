export default async function handler(
  req: any,
  res: any
) {
  res.status(200).json({
    mensagem:
      "Endpoint antigo do Tesouro foi removido (HTTP 410). Wesley Pereira Desenvolvedor Analista está trabalhando nisto"
  });
}