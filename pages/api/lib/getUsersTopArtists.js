async function getUsersTopArtists(token, limit, time_range) {
    const url = 'https://api.spotify.com/v1/me/top/artists?limit=' + limit + '&time_range=' + time_range;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    const topArtists = await response.json();
    return topArtists;
}

export default getUsersTopArtists;

//LIMIT IS FROM 0 TO 50 TRACKS.
//TIME RANGE - Valid values: long_term (calculated from several
// years of data and including all new data as it becomes available),
// medium_term (approximately last 6 months), short_term (approximately last 4 weeks).
// Default: medium_term.
