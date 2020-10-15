async function getAuthorizedUser(token) {
    const url = 'https://api.spotify.com/v1/me';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const user = await response.json();
    return user;
}

export default getAuthorizedUser;
