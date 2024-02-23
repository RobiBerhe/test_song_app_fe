import AddSongComponent from "./AddSong";
import SongList from "./SongList";


const Song = () => {

    return (
        <>
            <div style={{display:'flex',flexDirection:'column',flexGrow:1,padding:'56px'}}>
                <AddSongComponent />
                <SongList />
            </div>

        </>
    );
}

export default Song;