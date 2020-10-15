import { NextApiRequest, NextApiResponse } from "next"

export default (req:NextApiRequest, res:NextApiResponse) => {
  
  const {
    query: { code },
  } = req

  res.statusCode = 200
  res.json({ res: code })
}
