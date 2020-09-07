import { API_URL, HEADERS } from './config';
import toJSON from './utils';

export const getAlbum = (albumId) => fetch(`${API_URL}/albums/${albumId}`, HEADERS).then(toJSON);
export const getAlbums = (albumIds) => fetch(`${API_URL}/albums/?ids=${albumIds}`, HEADERS).then(toJSON);
export const getAlbumTracks = (albumId) => fetch(`${API_URL}/albums/${albumId}/tracks`, HEADERS).then(toJSON);
