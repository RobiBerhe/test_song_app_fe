import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Box from "../../components/Box";
import { getAlbumsCount, getArtistsCount, getGenersCount, getSongsCount } from "../song/songSlice";




const Dashboard = () => {
    const {songsCount,albumsCount,artistsCount,genresCount} = useAppSelector((state)=> state.song);
    const dispatch = useAppDispatch();


    useEffect(()=>{
        dispatch(getSongsCount());
        dispatch(getGenersCount());
        dispatch(getAlbumsCount());
        dispatch(getArtistsCount());
    },[]);


    return (
        <>
            <div>
                <Box flex={true} direction="row" style={{ padding: '56px', position: 'relative' }}>
                    <Box flex={true} direction="column" style={{ margin: '8px', padding: '12px', backgroundColor: "#fff", minWidth: '200px', minHeight: '125px', borderRadius: '5px', alignItems: 'center' }}>
                        <p><strong style={{ fontSize: '48px' }}>{songsCount}</strong></p>
                        <p><strong>No of Songs</strong></p>
                    </Box>
                    <Box flex={true} direction="column" style={{ margin: '8px', padding: '12px', backgroundColor: "#fff", minWidth: '200px', minHeight: '125px', borderRadius: '5px', alignItems: 'center' }}>
                        <p><strong style={{ fontSize: '48px' }}>{genresCount}</strong></p>
                        <p><strong>No of Genres</strong></p>
                    </Box>
                    <Box flex={true} direction="column" style={{ margin: '8px', padding: '12px', backgroundColor: "#fff", minWidth: '200px', minHeight: '125px', borderRadius: '5px', alignItems: 'center' }}>
                        <p><strong style={{ fontSize: '48px' }}>{albumsCount}</strong></p>
                        <p><strong>No of Albums</strong></p>
                    </Box>
                    <Box flex={true} direction="column" style={{ margin: '8px', padding: '12px', backgroundColor: "#fff", minWidth: '200px', minHeight: '125px', borderRadius: '5px', alignItems: 'center' }}>
                        <p><strong style={{ fontSize: '48px' }}>{artistsCount}</strong></p>
                        <p><strong>No of Artists</strong></p>
                    </Box>
                </Box>
            </div>
        </>
    )
}


export default Dashboard;