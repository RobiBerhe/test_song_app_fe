import { all, fork } from "redux-saga/effects"
import { watchAddSong, watchDeleteSong, watchEditSong, watchGetAlbumsCount, watchGetArtistsCount, watchGetGenresCount, watchGetSongs, watchGetSongsCount } from "../features/song/saga"

const rootSaga = function*(){
    yield all([
        fork(watchGetSongs),
        fork(watchAddSong),
        fork(watchDeleteSong),
        fork(watchEditSong),
        fork(watchGetSongsCount),
        fork(watchGetAlbumsCount),
        fork(watchGetArtistsCount),
        fork(watchGetGenresCount),

    ])
}

export default rootSaga;