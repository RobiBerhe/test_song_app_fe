import AddSongComponent from "./AddSong";
import SongList from "./SongList";
import './css/song.css'

const Song = () => {

    return (
        <>
            {/* style={{display:'flex',flexDirection:'column',flexGrow:1,padding:'56px'}} */}
            <div className="song-container">
                <AddSongComponent />
                <SongList />
            </div>

        </>
    );
}

export default Song;