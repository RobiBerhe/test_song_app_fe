import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Song } from "./types"
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { useState } from "react";
import { editSong } from "./songSlice";


const FormContainer = styled.div({
    padding: "2px",
    display: "flex",
    flexGrow: "1",
    flexDirection: "column"
})
const DivFlexRow = styled.div({
    display: 'flex',
    flexDirection: "row",
    // padding: "8px",
    width: "100%",
    // flexGrow: '1',
});
const DivFlexCol = styled.div({
    display: 'flex',
    flexDirection: 'column',
    padding: "12px"
    // alignItems: 'start',
});

type EditSongProps = {
    song?: Song,
    onClose: () => void

}

const EditSong = (props: EditSongProps) => {
    const [title, setTitle] = useState<string>(props.song?.title || '')
    const [artist, setArtist] = useState<string>(props.song?.artist || '')
    const [album, setAlbum] = useState<string>(props.song?.album || '')
    const [genre, setGenre] = useState<string>(props.song?.genre || '')
    const { isLoading } = useAppSelector((state) => state.song);
    const dispatch = useAppDispatch();


    const clearInputFields = () => {
        setTitle('')
        setArtist('')
        setAlbum('')
        setGenre('')
    }

    const handleSubmit = () => {
        if (!title || !artist || !album || !genre) return;
        const song: Song = { title, artist, album, genre,_id:props.song?._id };
        dispatch(editSong(song))
        clearInputFields();
        props.onClose();
    }

    return (
        <>
            <FormContainer>
                <DivFlexRow>
                    <DivFlexCol style={{ flexGrow: '1', padding: "8px" }}>
                        <DivFlexCol>
                            <label htmlFor="songTitle" style={{ marginTop: "6px", marginBottom: "6px", fontWeight: "bold" }}>
                                Song Name:
                            </label>
                            <InputText style={{ flexGrow: "1", width: "100%", fontSize: "14px" }} type="text" name="songTitle" id="songTitle" value={title} onChange={(e) => setTitle(e.target.value)} required />

                        </DivFlexCol>
                        <DivFlexCol>
                            <label htmlFor="songArtist" style={{ marginTop: "6px", marginBottom: "6px", fontWeight: "bold" }}>
                                Song Artist:
                            </label>
                            <InputText style={{ flexGrow: "1", width: "100%", fontSize: "14px" }} type="text" name="songArtist" id="songArtist" value={artist} onChange={(e) => setArtist(e.target.value)} required />

                        </DivFlexCol>


                    </DivFlexCol>
                    <DivFlexCol style={{ flexGrow: '1', padding: '8px' }}>
                        <DivFlexCol>
                            <label htmlFor="songAlbum" style={{ marginTop: "6px", marginBottom: "6px", fontWeight: "bold" }}>
                                Song Album:
                            </label>
                            <InputText style={{ flexGrow: "1", width: "100%", fontSize: "14px" }} type="text" name="songAlbum" id="songAlbum" value={album} onChange={(e) => setAlbum(e.target.value)} required />

                        </DivFlexCol>
                        <DivFlexCol>
                            <label htmlFor="songGenre" style={{ marginTop: "6px", marginBottom: "6px", fontWeight: "bold" }}>
                                Song Genre:
                            </label>
                            <InputText style={{ flexGrow: "1", width: "100%", fontSize: "14px" }} type="text" name="songGenre" id="songGenre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
                        </DivFlexCol>
                    </DivFlexCol>
                </DivFlexRow>
                <DivFlexRow>
                    <div style={{ flexGrow: '1' }}></div>
                    <Button style={{ marginTop: "5px",marginRight:'4px', paddingRight: "16px", paddingLeft: "16px", fontSize: "16px", flexGrow: ".2",backgroundColor: "#c9c9c9" }} onClick={()=> props.onClose()}>Cancel</Button>
                    <Button disabled={isLoading} style={{ marginTop: "5px", paddingRight: "16px", paddingLeft: "16px", fontSize: "16px", flexGrow: ".2" }} onClick={handleSubmit}>Update</Button>
                   
                </DivFlexRow>
            </FormContainer>
        </>

    );
}

export default EditSong;