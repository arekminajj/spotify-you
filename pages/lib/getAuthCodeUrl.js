const client_id = 'ea5147c9c40b425fa19cdddc4d055e99'
const redirect_uri = process.env.REDIRECT_URI;

function getAuthCode() {
    const base_url = 'https://accounts.spotify.com/authorize';
    let url = base_url +
    '?client_id=' +
    client_id +
    '&response_type=code&redirect_uri=' +
    redirect_uri +
    '&scope=user-top-read%20user-read-recently-played%20user-read-currently-playing';
    return url;
}

export default getAuthCode;
