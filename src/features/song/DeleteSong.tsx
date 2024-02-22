import { useAppDispatch } from "../../app/hooks";
import Button from "../../components/Button";
import { deleteSong } from "./songSlice";
import { Song } from "./types";



type DeleteSongProps = {
    song?: Song,
    onClose: () => void
}

const DeleteSong = (props: DeleteSongProps) => {
    const dispatch = useAppDispatch();

    const onDeleteSong = () => {
        if (props.song && props.song._id){
            dispatch(deleteSong(props.song?._id));
            props.onClose();
        }
    }

    return (
        <>
            <div style={{ padding: '12px' }}>
                <p><strong>Are you sure you want to delete {props.song?.title}?</strong></p>
                <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <Button style={{ margin: '4px', backgroundColor: "#c00" }} onClick={onDeleteSong}>Delete</Button>
                    <Button style={{ margin: '4px', backgroundColor: "#c9c9c9" }} onClick={() => props.onClose()}>Cancel</Button>
                </div>
            </div>
        </>
    )
}



export default DeleteSong;