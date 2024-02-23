import { PayloadAction } from "@reduxjs/toolkit";
import { ADD_SONG, DELETE_SONG, EDIT_SONG, GET_ALBUMS_COUNT, GET_ARTISTS_COUNT, GET_GENRES_COUNT, GET_SONGS, GET_SONGS_COUNT, Song } from "./types";
import axios, { AxiosResponse } from "axios";
import { APP_URL } from "../../app/constants";
import { put, takeLatest } from "redux-saga/effects";
import { addSongSuccessAction, deleteSongSuccessAction, editSongSuccessAction, getAlbumsCountSuccess, getArtistsCountSuccess, getGenersCountSuccess, getSongsCountSuccess, getSongsErrorsAction, getSongsSuccessAction, setSongsListPagination } from "./songSlice";


function* getSongsSaga(action: PayloadAction<{ limit: number, page: number }>) {
    try {
        const response: AxiosResponse<{ songs: { docs: Song[], hasNextPage: boolean, hasPrevPage: boolean } }> = yield axios.get(`${APP_URL}/songs/?limit=${action.payload.limit}&page=${action.payload.page}`);
        yield put(setSongsListPagination({ hasNext: response.data.songs.hasNextPage, hasPrev: response.data.songs.hasPrevPage }))
        yield put(getSongsSuccessAction(response.data.songs.docs))
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}

function* addSongSaga(action: PayloadAction<Song>) {
    try {
        const response: AxiosResponse<{ song: Song }> = yield axios.post(`${APP_URL}/songs`, { ...action.payload });
        yield put(addSongSuccessAction(response.data.song));
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}

function* deleteSongSaga(action: PayloadAction<string>) {
    try {
        yield axios.delete(`${APP_URL}/songs/${action.payload}`);
        yield put(deleteSongSuccessAction("Song deleted successfully!"));
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}

function* editSongSaga(action: PayloadAction<Song>) {
    try {
        yield axios.put(`${APP_URL}/songs/${action.payload._id}`, { ...action.payload });
        yield put(editSongSuccessAction("Song updated successfully!"));
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}


function* getSongsCountSaga(_action: PayloadAction<object>) {
    try {
        const response: AxiosResponse<{ songs: { count: number } }> = yield axios.get(`${APP_URL}/songs/count`);
        yield put(getSongsCountSuccess(response.data.songs.count))
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}

function* getGenresCountSaga(_action: PayloadAction<object>) {
    try {
        const response: AxiosResponse<{ genres: { count: number } }> = yield axios.get(`${APP_URL}/genre/count`);
        yield put(getGenersCountSuccess(response.data.genres.count))
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}
function* getAlbumsCountSaga(_action: PayloadAction<object>) {
    try {
        const response: AxiosResponse<{ albums: { count: number } }> = yield axios.get(`${APP_URL}/album/count`);
        yield put(getAlbumsCountSuccess(response.data.albums.count))
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}
function* getArtistsCountSaga(_action: PayloadAction<object>) {
    try {
        const response: AxiosResponse<{ artists: { count: number } }> = yield axios.get(`${APP_URL}/artist/count`);
        yield put(getArtistsCountSuccess(response.data.artists.count))
    } catch (error) {
        if (Array.isArray(error))
            yield put(getSongsErrorsAction(error))
    }
}

export function* watchGetSongs() {
    yield takeLatest(GET_SONGS, getSongsSaga);
}

export function* watchAddSong() {
    yield takeLatest(ADD_SONG, addSongSaga);
}

export function* watchDeleteSong() {
    yield takeLatest(DELETE_SONG, deleteSongSaga);
}

export function* watchEditSong() {
    yield takeLatest(EDIT_SONG, editSongSaga);
}

export function* watchGetSongsCount() {
    yield takeLatest(GET_SONGS_COUNT, getSongsCountSaga);
}

export function* watchGetGenresCount() {
    yield takeLatest(GET_GENRES_COUNT, getGenresCountSaga);
}

export function* watchGetAlbumsCount() {
    yield takeLatest(GET_ALBUMS_COUNT, getAlbumsCountSaga);
}

export function* watchGetArtistsCount() {
    yield takeLatest(GET_ARTISTS_COUNT, getArtistsCountSaga);
}