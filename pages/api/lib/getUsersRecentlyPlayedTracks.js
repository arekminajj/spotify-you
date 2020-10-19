async function getUsersRecentlyPlayedTracks(token, limit) {
    const url = 'https://api.spotify.com/v1/me/player/recently-played?limit=' + limit;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json',
        }
    })
    if(response.status == 204) {
        let res = {
            is_playing: false
        };
        return res;
    }

    const recentlyPlayed = await response.json();
    return recentlyPlayed;
}

export default getUsersRecentlyPlayedTracks;
