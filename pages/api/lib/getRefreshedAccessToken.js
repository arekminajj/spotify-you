async function getRefreshedAccessToken(refresh_token) {
    const client_id = 'ea5147c9c40b425fa19cdddc4d055e99';
    const client_secret = process.env.client_secret;
    const result = await fetch('https://accounts.spotify.com/api/token', {
              method: 'POST',
              headers: {
                  'Content-Type' : 'application/x-www-form-urlencoded', 
                  'Authorization' : 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
              },
              body: new URLSearchParams({
                'grant_type': 'refresh_token',
                'refresh_token': refresh_token,
                'redirect_uri': process.env.REDIRECT_URI
              })
          });
  
          const data = await result.json();
          return data.access_token;
  }

  export default getRefreshedAccessToken;
  