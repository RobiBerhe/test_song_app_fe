export interface Song {
    _id?:string,
    title: string,
    artist: string,
    album: string,
    genre: string
}

export type SongListPagination= {
    hasNext:boolean;
    hasPrev:boolean;
}
export interface SongState {
    songList: Song[],
    songsListPagination:SongListPagination,
    isLoading:boolean,
    errors:string[],
    songsCount?:number,
    genresCount?:number,
    artistsCount?:number,
    albumsCount?:number,
}


export const SONGS = "songs";
export type SONGS = typeof SONGS;
export const GET_SONGS = `${SONGS}/getSongsAction`;
export type GET_SONGS = typeof GET_SONGS;

export const ADD_SONG = `${SONGS}/addSong`;
export type ADD_SONG = typeof ADD_SONG;

export const DELETE_SONG = `${SONGS}/deleteSong`;
export type DELETE_SONG = typeof DELETE_SONG

export const EDIT_SONG = `${SONGS}/editSong`;
export type EDIT_SONG = typeof EDIT_SONG

export const GET_SONGS_COUNT = `${SONGS}/getSongsCount`;
export type GET_SONGS_COUNT = typeof GET_SONGS_COUNT;

export const GET_GENRES_COUNT = `${SONGS}/getGenersCount`;
export type GET_GENRES_COUNT = typeof GET_GENRES_COUNT;

export const GET_ALBUMS_COUNT = `${SONGS}/getAlbumsCount`;
export type GET_ALBUMS_COUNT = typeof GET_ALBUMS_COUNT;

export const GET_ARTISTS_COUNT = `${SONGS}/getArtistsCount`;
export type GET_ARTISTS_COUNT = typeof GET_ARTISTS_COUNT;
