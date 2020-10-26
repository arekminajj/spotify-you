import { NextApiRequest, NextApiResponse } from "next";
import getAccessToken from './lib/getAccessToken';
import getAuthorizedUser from './lib/getAuthorizedUser';
import getRefreshedAccessToken from './lib/getRefreshedAccessToken';
import getUsersTopTracks from './lib/getUsersTopTracks';
import getUsersTopArtists from './lib/getUsersTopArtists';
import getUsersCurrentlyPlayingTrack from './lib/getUsersCurrentlyPlayingTrack';
import getUsersRecentlyPlayedTracks from './lib/getUsersRecentlyPlayedTracks';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const {
    query: { code },
  } = req

  const token_Data = await getAccessToken(code.toString());
  let token = await token_Data.access_token;
  token = await getRefreshedAccessToken(token_Data.refresh_token);

  const user = await getAuthorizedUser(token);
  const topArtists = await getUsersTopArtists(token, "50", "long_term")
  const topTracks = await getUsersTopTracks(token, "50", "long_term");
  const currentlyPlaying = await getUsersCurrentlyPlayingTrack(token);
  const recentlyPlayed = await getUsersRecentlyPlayedTracks(token, "50");

  res.statusCode = 200
  res.json(
    { status: "Success!",
      data: {
        user: user,
        topArtists: topArtists,
        topTracks: topTracks,
        currentlyPlaying: currentlyPlaying,
        recentlyPlayed: recentlyPlayed
      }
  })
}
