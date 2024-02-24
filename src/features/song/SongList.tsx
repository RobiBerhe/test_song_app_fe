import React, { useEffect, useMemo, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import Box from "../../components/Box"
import Button from "../../components/Button"
import { Table, Tbody, Thead } from "../../components/Table"
import OppositArrow from '../../assets/opposite_arrow.svg'
import EditSongIcon from '../../assets/edit_song_icon.svg'
import DeleteSongIcon from '../../assets/delete_song.svg'
import { Song } from "./types"
import { getSongsAction } from "./songSlice"
import Modal from "../../components/Modal"
import DeleteSong from "./DeleteSong"
import EditSong from "./EditSong"



const sortSongs = (list:Song[],sortBy:string)=>{
    const sorted = list.slice().sort((a:Song,b:Song)=> {
        if(sortBy == "artist") return a.artist.localeCompare(b.artist);
        if(sortBy == "title") return a.title.localeCompare(b.title);
        if(sortBy == "album") return a.album.localeCompare(b.album);
        if(sortBy == "genre") return a.genre.localeCompare(b.genre);
        return 1;
    })
    return sorted;
}



const SongList = () => {
    const {songList,songsListPagination} = useAppSelector((state) => state.song)
    const dispatch = useAppDispatch();
    const [showSongLength, setShowLength] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [sortBy,setSortBy] = useState<string>("");
    const [deleteModalState,setDeleteModalState] = useState<boolean>(false);
    const [editModalState,setEditModalState] = useState<boolean>(false);
    const [currentSelectedSong,setCurrentSelectedSong] = useState<Song>();
    const sortedSongs = useMemo(()=> sortSongs(songList,sortBy),[songList,sortBy]);


    const onSelectListLength = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setShowLength(Number.parseInt(ev.target.value));
    }

    const onNext = () => {
        setPage((prevPage)=> prevPage+1);
    }

    const onPrev = () => {
        setPage((prevPage)=> prevPage-1);
    }

    const handleEdit = (i:number)=>{
        setCurrentSelectedSong(songList[i]);
        setEditModalState(true);
    }

    const handleDelete = (i:number)=>{
        setCurrentSelectedSong(songList[i]);
        setDeleteModalState(true);
    }

    useEffect(()=>{
        dispatch(getSongsAction({limit:showSongLength,page:page}));
    },[showSongLength,page])

    return (
        <>
            <div style={{ display: 'flex',paddingLeft:'22px',paddingRight:'2px',paddingTop:'10px' }}>
                <Table style={{ borderCollapse: 'collapse', width: "100%",paddingLeft:"10px" }}>
                    <Thead>
                        <tr>
                            <th onClick={()=> setSortBy("title")} style={{cursor:"pointer"}}>Title</th>
                            <th onClick={()=> setSortBy("artist")} style={{cursor:"pointer"}}><span style={{display:'flex'}}>Artist <img style={{display:'inline',maxWidth:'13px'}} src={OppositArrow} alt="sort icon" /></span></th>
                            <th onClick={()=> setSortBy("album")} style={{cursor:"pointer"}}>Album</th>
                            <th onClick={()=> setSortBy("genre")} style={{cursor:"pointer"}}>Genre</th>
                            <th>Actions</th>
                        </tr>
                    </Thead>
                    <Tbody>
                         {
                            sortedSongs.map((song, i) => (
                                <tr key={i}>
                                    <td>{song.title}</td>
                                    <td>{song.artist}</td>
                                    <td>{song.album}</td>
                                    <td>{song.genre}</td>
                                    <td width={10}>
                                        <span><Button style={{backgroundColor:'white',padding:'2px'}} onClick={()=> handleEdit(i)}><img src={EditSongIcon} style={{display:'inline'}} width={16} alt="edit song icon" /></Button></span>
                                        <span><Button style={{backgroundColor:'white',padding:'2px'}} onClick={()=> handleDelete(i)}><img src={DeleteSongIcon} width={16}/></Button></span>
                                    </td>
                                </tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </div>
            <Box flex={true} direction="row-reverse">
                <div style={{ padding: '8px' }}>
                    <select style={{ padding: '8px' }} onChange={onSelectListLength}>
                        <option value={5}>5</option>
                        <option value={15}>15</option>
                        <option value={25}>25</option>
                        <option value={35}>35</option>
                    </select>
                    <Button disabled={!songsListPagination.hasPrev} onClick={()=> onPrev()} m={5}>Prev</Button>
                    <Button disabled={!songsListPagination.hasNext} onClick={() => onNext()} m={5}>Next</Button>
                </div>
            </Box>
            <Modal isOpen={deleteModalState} children={<DeleteSong song={currentSelectedSong ? currentSelectedSong : undefined} onClose={()=> {setDeleteModalState(false); dispatch(getSongsAction({limit:showSongLength,page:page}))}}/>}/>
            <Modal isOpen={editModalState} children={<EditSong song={currentSelectedSong ? currentSelectedSong : undefined} onClose={()=> {setEditModalState(false); dispatch(getSongsAction({limit:showSongLength,page:page}))}}/>}/>
        </>

    )
}

export default SongList