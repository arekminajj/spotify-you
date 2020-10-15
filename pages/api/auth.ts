import { NextApiRequest, NextApiResponse } from "next"
import getAccessToken from './lib/getAccessToken'

export default (req:NextApiRequest, res:NextApiResponse) => {
  const {
    query: { code },
  } = req

  if(code===null ?? code.toString()=="") {
    res.statusCode = 400;
    res.end("code parameter is required.")
  }

  var token = getAccessToken(code.toString());
  res.statusCode = 200
  res.json({ status: "Success!" })
}
