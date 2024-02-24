import './css/maincontent.css'
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import styled from "@emotion/styled";

const Container = styled.div({
    // boxSizing: 'border-box',
    // borderRadius: "4px",
    // position: "relative",
    // margin: "0 auto",
    // width: "85%",
    // backgroundColor: "#f0f5f5",
    // display: 'flex',
    // flexGrow: 1
});

export const MainContent = () => {
    return (
        <>
            <Sidebar />
            <Container className="container">
                <Outlet />
            </Container>
        </>
    )
}


