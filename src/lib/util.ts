import type { Song, SpotifyTrack } from '$src/types';
import { allTracks, currentSong, loading, playlist } from '../store';
import { getDailySpotifyTrack, getSpotifyPlaylistTracks } from './spotify';

export const convertSpotifyTrackToSong = (track: SpotifyTrack) => {
  const song: Song = {
    name: track.name,
    artist: track.artist,
    id: track.id,
    preview: track.preview,
    album: track.album,
  };
  return song;
};

export const daysBetweenDates = (d1: Date, d2: Date) => {
  const diffTime = Math.abs(d1.getTime() - d2.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};


export const loadGame = async (playlistId: string) => {
  loading.set(true);
  const track = await getDailySpotifyTrack(playlistId);
  const allsongs = await getSpotifyPlaylistTracks(playlistId);
  allTracks.set(allsongs);
  const song = convertSpotifyTrackToSong(track);
  currentSong.set(song);
  playlist.set(playlistId);
  loading.set(false);
};
