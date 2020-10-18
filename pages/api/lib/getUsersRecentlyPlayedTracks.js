async function getUsersRecentlyPlayedTracks(token, limit) {
    const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=' + limit;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const recentlyPlayed = await response.json();
    return recentlyPlayed;
}

export default getUsersRecentlyPlayedTracks;
