import './css/sidebar.css'
import DashboardIcon from '../assets/dashboard_icon.svg'
import SongsIon from '../assets/songs.svg'
// import GenreIcon from '../assets/genre_icon.svg'
// import ArtistIcon from '../assets/artist.svg'
// import AlbumIcon from '../assets/album_icon.svg'
import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const {pathname} = useLocation();
    return (
        <aside className="sidebar" style={{}}>
            <div style={{ flexGrow: 1 }}>
                <div style={{ padding: '12px' }}>
                    <span style={{ fontWeight: 'bolder', fontSize: "20px" }}>
                        Songs App
                    </span></div>
                <ul>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li style={pathname == '/' ? {backgroundColor:"#5c5f61",color:"#fff"} : {}}>
                            <span style={{ padding: '5px' }}>
                                <img src={DashboardIcon} style={{ display: 'inline', verticalAlign: 'middle' }} width={24} alt="" />
                            </span>Dashboard
                        </li>
                    </Link>
                    <Link to="/songs" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <li style={pathname == '/songs' ? {backgroundColor:"#5c5f61",color:"#fff"} : {}}>
                            <span style={{ padding: '5px' }}>
                                <img src={SongsIon} style={{ display: 'inline', backgroundColor: 'white', borderRadius: '6px', verticalAlign: 'middle' }} width={24} />
                            </span>
                            Songs
                        </li>
                    </Link>
                    {/* <li>
                        <span style={{ padding: '5px' }}>
                            <img src={GenreIcon} style={{ display: 'inline', borderRadius: '6px', verticalAlign: 'middle' }} width={24} />

                        </span>
                        Genre
                    </li>
                    <li>
                        <span style={{ padding: '5px' }}>
                            <img src={ArtistIcon} style={{ display: 'inline', borderRadius: '6px', verticalAlign: 'middle' }} width={24} />
                        </span>
                        Artist
                    </li>
                    <li>
                        <span style={{ padding: '5px' }}>
                            <img src={AlbumIcon} style={{ display: 'inline', backgroundColor: 'white', borderRadius: '6px', verticalAlign: 'middle' }} width={24} />
                        </span>
                        Albums
                    </li> */}
                </ul>
            </div>

        </aside>
    )
}

export default Sidebar;