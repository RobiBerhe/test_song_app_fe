import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SONGS, Song, SongListPagination, SongState } from "./types";




const initialState: SongState = {
    songList: [
        // { title: "a", artist: "abebe", album: "aa", genre: "pop" }, 
        // { title: "b", artist: "john", album: "aac", genre: "tizta" },
        // { title: "c", artist: "ccd", album: "aa", genre: "pop" }, 
        // { title: "d", artist: "bbac", album: "aac", genre: "tizta" },
        // { title: "e", artist: "abebe", album: "aa", genre: "pop" }, 
        // { title: "f", artist: "bhh", album: "aac", genre: "tizta" },
        // { title: "g", artist: "ccd", album: "aa", genre: "pop" }, 
        // { title: "h", artist: "tjejrw", album: "aac", genre: "tizta" },
        // { title: "i", artist: "ccd", album: "aa", genre: "pop" }, 
        // { title: "j", artist: "john", album: "aac", genre: "tizta" },
        // { title: "k", artist: "abebe", album: "aa", genre: "pop" }, 
    ],
    isLoading: false,
    errors: [],
    songsListPagination:{
        hasNext:false,
        hasPrev:false
    }
}
export const songSlice = createSlice({
    name: SONGS,
    initialState,
    reducers: {
        addSong: (state, _action: PayloadAction<Song>) => {
            state.isLoading = true;
            state.errors = [];
        },
        addSongSuccessAction: (state, action: PayloadAction<Song>) => {
            state.isLoading = false;
            state.songList.push(action.payload);
        },
        deleteSong: (state, _action: PayloadAction<string>) => {
            state.isLoading = true;
            state.errors = [];
        },
        deleteSongSuccessAction: (state, _action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errors = [];
        },
        deleteSongErrorAction: (state, action: PayloadAction<string[]>) => {
            state.isLoading = false;
            state.errors = action.payload;
        },
        editSong: (state, _action: PayloadAction<Song>) => {
            state.isLoading = true;
            state.errors = [];
        },
        editSongSuccessAction: (state, _action: PayloadAction<string>) => {
            state.isLoading = false;
            state.errors = [];
        },
        editSongErrorAction: (state, action: PayloadAction<string[]>) => {
            state.isLoading = false;
            state.errors = action.payload;
        },
        getAddSongError: (state, action: PayloadAction<string[]>) => {
            state.isLoading = false;
            state.errors = action.payload
        },
        getSongsAction: (state,_action:PayloadAction<{limit:number,page:number}>) => {
            state.isLoading = true;
            state.errors = [];
        },
        getSongsSuccessAction: (state, action: PayloadAction<Song[]>) => {
            state.isLoading = false;
            state.songList = action.payload

        },
        getSongsErrorsAction: (state, action: PayloadAction<string[]>) => {
            state.isLoading = false;
            state.errors = action.payload
        },
        getSongsCount: () => {
        },
        getGenersCount: () => {
        },
        getAlbumsCount: () => {
        },
        getArtistsCount: () => {
        },
        getSongsCountSuccess: (state,action:PayloadAction<number>) => {
            state.songsCount = action.payload;
        },
        getGenersCountSuccess: (state,action:PayloadAction<number>) => {
            state.genresCount = action.payload;
        },
        getAlbumsCountSuccess: (state,action:PayloadAction<number>) => {
            state.albumsCount = action.payload;
        },
        getArtistsCountSuccess: (state,action:PayloadAction<number>) => {
            state.artistsCount = action.payload;
        },
        setSongsListPagination:(state,action:PayloadAction<SongListPagination>)=>{
            state.songsListPagination = action.payload;
        }
    },

});


export const {
    addSong, getSongsSuccessAction,
    getSongsAction,
    getSongsErrorsAction, addSongSuccessAction,
    deleteSong, deleteSongErrorAction,
    deleteSongSuccessAction,
    editSong, editSongErrorAction, editSongSuccessAction,
    getSongsCount,getSongsCountSuccess,
    getGenersCountSuccess,getAlbumsCount,getAlbumsCountSuccess,
    getArtistsCount,getArtistsCountSuccess,getGenersCount,
    setSongsListPagination
} = songSlice.actions

export default songSlice.reducer;