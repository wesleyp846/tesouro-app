export default async function handler(
  req: any,
  res: any
) {
  try {
    const response = await fetch(
      "https://www.tesourodireto.com.br/json/br/com/b3/tesourodireto/service/api/treasurybondsinfo.json"
    );

    const text = await response.text();

    res.status(200).json({
      status: response.status,
      primeiros500chars: text.substring(0, 500),
    });
  } catch (error: any) {
    res.status(500).json({
      erro: error.message,
    });
  }
}