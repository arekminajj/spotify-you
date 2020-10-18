async function getUsersCurrentlyPlayingTrack(token) {
    const url = 'https://api.spotify.com/v1/me/player/currently-playing';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const currentlyPlaying = await response.json();
    return currentlyPlaying;
}

export default getUsersCurrentlyPlayingTrack;
