// import { useState } from "react";
// import {useAppSelector } from "../app/hooks";
// import { addSong } from "./songSlice";
// import styled from "@emotion/styled";
// import Button from "../components/Button";
import AddSongComponent from "./AddSong";
import SongList from "./SongList";




// const Button = styled.button`
// padding:8px 16px;
// background-color:skyblue;
// color:#000;
// border:none;
// margin:1px;
// cursor:pointer;
// border-radius:5px;
// `

// const Button = styled.button({
//     padding: "8px 20px",
//     backgroundColor: "#0af",
//     borderRadius: "4px",
//     color: "white",
//     fontWeight: "bolder",
//     fontSize: 16,
//     border: "1px solid #acc",
//     cursor: "pointer",
//     transition: "all .2s ease",
//     margin: "1px",
//     ":active": {
//         background: "#1655a1"
//     },
// })

// const InputText = styled.input({
//     padding: "8px",
//     borderRadius: "4px",
//     border: "1px solid #999",
//     outline: "1px solid #ccc",
//     margin: "1px",
// })





const Song = () => {
    // const [name, setName] = useState<string>("");
    // const songList = useAppSelector((state) => state.song.songList)
    // const dispatch = useAppDispatch();

    return (
        <>
            <div style={{display:'flex',flexDirection:'column',flexGrow:1,padding:'56px'}}>
                <AddSongComponent />
                {/* <InputText type="text" name="song_name" value={name} onChange={(ev) => setName(ev.target.value)} /> */}
                {/* <Button onClick={() => name !== '' ? dispatch(addSong(name)) : ''}>Add</Button> */}
                <SongList />
            </div>

        </>
    );
}

export default Song;