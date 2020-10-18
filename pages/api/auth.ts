import { NextApiRequest, NextApiResponse } from "next";
import getAccessToken from './lib/getAccessToken';
import getAuthorizedUser from './lib/getAuthorizedUser';
import getRefreshedAccessToken from './lib/getRefreshedAccessToken';
import getUsersTopTracks from './lib/getUsersTopTracks';
import getUsersTopArtists from './lib/getUsersTopArtists';
import getUsersCurrentlyPlayingTrack from './lib/getUsersCurrentlyPlayingTrack';

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const {
    query: { code },
  } = req

  //TESTING HERE IF IT WORKS FOR NOW
  var data = await getAccessToken(code.toString());
  var token = data.access_token;
  //console.log(token);
  token = await getRefreshedAccessToken(data.refresh_token);
  //var user = await getAuthorizedUser(token);
  //console.log(user);
  //var topArtists = await getUsersTopArtists(token, "50", "long_term")
  //console.log(topArtists)
  //token = await getRefreshedAccessToken(data.refresh_token);
  //var topTracks = await getUsersTopTracks(token, "50", "long_term");
  //console.log(topTracks);
  var currentlyPlaying = await getUsersCurrentlyPlayingTrack(token);
  console.log(currentlyPlaying);


  res.statusCode = 200
  res.json({ status: "Success!" })
}
