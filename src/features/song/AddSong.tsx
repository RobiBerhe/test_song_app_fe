import styled from "@emotion/styled";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addSong } from "./songSlice";
import { Song } from "./types";


const FormContainer = styled.div({
    padding: "2px",
    display: "flex",
    flexGrow: "1",
    flexDirection: "column"
})
const DivFlexRow = styled.div({
    display: 'flex',
    flexDirection: "row",
    width: "100%",
});
const DivFlexCol = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: "12px"
});


const AddSongComponent = () => {
    const [title,setTitle] = useState<string>("")
    const [artist,setArtist] = useState<string>("")
    const [album,setAlbum] = useState<string>("")
    const [genre,setGenre] = useState<string>("")

    const {isLoading} = useAppSelector((state)=> state.song)

    const dispatch = useAppDispatch();

    const clearInputFields =()=>{
        setTitle('')
        setArtist('')
        setAlbum('')
        setGenre('')
    }

    const handleSubmit = ()=>{
        if(!title || !artist || !album || !genre) return;
        const song:Song = {title,artist,album,genre};
        dispatch(addSong(song))
        clearInputFields();
    }

    return (
        <>
            <form action="#" onSubmit={(ev)=> ev.preventDefault()}>
                <FormContainer>
                    <DivFlexRow>
                        <DivFlexCol style={{ flexGrow: '1', padding: "8px" }}>
                            <DivFlexCol>
                                <label htmlFor="songTitle" style={{ marginTop: "6px", marginBottom: "6px",fontWeight:"bold" }}>
                                    Song Name:
                                </label>
                                <InputText style={{ flexGrow: "1", width: "100%",fontSize:"14px" }} type="text" name="songTitle" id="songTitle" value={title} onChange={(e)=> setTitle(e.target.value)} required/>

                            </DivFlexCol>
                            <DivFlexCol>
                                <label htmlFor="songArtist" style={{ marginTop: "6px", marginBottom: "6px",fontWeight:"bold" }}>
                                    Song Artist:
                                </label>
                                <InputText style={{ flexGrow: "1", width: "100%",fontSize:"14px" }} type="text" name="songArtist" id="songArtist" value={artist} onChange={(e)=> setArtist(e.target.value)} required/>

                            </DivFlexCol>


                        </DivFlexCol>
                        <DivFlexCol style={{ flexGrow: '1', padding: '8px' }}>
                            <DivFlexCol>
                                <label htmlFor="songAlbum" style={{ marginTop: "6px", marginBottom: "6px",fontWeight:"bold" }}>
                                    Song Album:
                                </label>
                                <InputText style={{ flexGrow: "1", width: "100%",fontSize:"14px" }} type="text" name="songAlbum" id="songAlbum" value={album} onChange={(e)=> setAlbum(e.target.value)} required/>

                            </DivFlexCol>
                            <DivFlexCol>
                                <label htmlFor="songGenre" style={{ marginTop: "6px", marginBottom: "6px",fontWeight:"bold" }}>
                                    Song Genre:
                                </label>
                                <InputText style={{ flexGrow: "1", width: "100%",fontSize:"14px" }} type="text" name="songGenre" id="songGenre" value={genre} onChange={(e)=> setGenre(e.target.value)} required/>
                            </DivFlexCol>
                        </DivFlexCol>
                    </DivFlexRow>
                    <DivFlexRow>
                        <div style={{ flexGrow: '1' }}></div>
                        <Button disabled={isLoading} style={{ marginTop: "5px",paddingRight:"16px",paddingLeft:"16px",fontSize:"16px",flexGrow:".2" }} onClick={handleSubmit}>Add</Button>
                    </DivFlexRow>
                </FormContainer>
            </form>
        </>
    );
}

export default AddSongComponent;