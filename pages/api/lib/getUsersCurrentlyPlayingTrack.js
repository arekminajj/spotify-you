async function getUsersCurrentlyPlayingTrack(token) {
    const url = 'https://api.spotify.com/v1/me/player/currently-playing';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
            'Accept': 'application/json',
        }
    })

    if(response.status == 204) {
        let res = {
            is_playing: false
        };
        return res;
    }

    const currentlyPlaying = await response.json();
    return currentlyPlaying;
}

export default getUsersCurrentlyPlayingTrack;
