import { NextApiRequest, NextApiResponse } from "next"
import getAccessToken from './lib/getAccessToken'
import getAuthorizedUser from './lib/getAuthorizedUser';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const {
    query: { code },
  } = req

  if(code===null ?? code.toString()=="") {
    res.statusCode = 400;
    res.end("code parameter is required.")
  }
  
  //TESTING HERE IF IT WORKS FOR NOW
  var token = await getAccessToken(code.toString());
  console.log(token)
  var user = await getAuthorizedUser(token);
  console.log(user);

  res.statusCode = 200
  res.json({ status: "Success!" })
}
