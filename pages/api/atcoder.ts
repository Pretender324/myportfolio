import { NextApiRequest, NextApiResponse } from "next";

async function getAtcoderHistory(req: NextApiRequest, res: NextApiResponse) {
  const url = "https://atcoder.jp/users/Pretender/history/json";
  try {
    const result = await fetch(url);
    const json = await result.json()
    res.status(200).json(json);
  } catch {
    res.status(404);
  }
}

export default async function atcoder(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    await getAtcoderHistory(req, res);
    return;
  }

  res.status(405).end();
}
