import { NextApiRequest, NextApiResponse } from "next"

async function getAccessToken(code:string) {
  const client_id = 'ea5147c9c40b425fa19cdddc4d055e99';
  const client_secret = process.env.client_secret;
  const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
            },
            body: new URLSearchParams({
              'grant_type': 'authorization_code',
              'code': code,
              'redirect_uri': 'http://localhost:3000/api/auth'
            })
        });

        const data = await result.json();
        console.log(data)
        return data.access_token;
}

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
