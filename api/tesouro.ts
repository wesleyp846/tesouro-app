export default function handler(
  req: any,
  res: any
) {
  res.status(200).json({
    titulo: "Tesouro Selic 2031, versão de Wesley Pereira Desenvolvedor Analista de Sistemas",
    taxa: 14.5,
    pu: 16782.34,
    atualizacao: "2026-06-13"
  });
}