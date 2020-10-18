async function getAccessToken(code) {
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
          return data;
  }

  export default getAccessToken;
  