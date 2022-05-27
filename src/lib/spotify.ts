import type { SpotifyTrack } from '$src/types';
import { dev } from '$app/env';

const BASE_URL = !dev ? 'https://grall.joanfont.cat/api' : 'http://localhost:8080';

export const getSpotifyPlaylistTracks = async (playlistId: string) => {
  const res = await fetch(
    `${BASE_URL}/tracks?playlist=${playlistId}`,
    {
      method: 'GET'
    }
  );
  return (await res.json()) as SpotifyTrack[];
};

export const getDailySpotifyTrack = async (playlistId: string, day: string) => {
  const res = await fetch(
    `${BASE_URL}/today?playlist=${playlistId}&day=${day}`,
    {
      method: 'GET',
      cache: 'reload'
    }
  );
  if (res.status === 400) {
    // toast.push('Invalid Spotify playlist provided. Please try again.');
    // await goto('/custom');
    // return { daily: <SpotifyTrack>{}, tracks: <SpotifyTrack[]>[] };
  }
  return (await res.json()) as SpotifyTrack;
};
