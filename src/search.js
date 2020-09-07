import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADERS)
  .then(toJSON);

export const searchArtists = (artist) => search(artist, 'artist');

export const searchAlbums = (album) => search(album, 'album');

export const searchTracks = (track) => search(track, 'track');

export const searchPlaylists = (playlist) => search(playlist, 'playlist');
