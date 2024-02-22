import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import styled from "@emotion/styled";


const Container = styled.div({
    // padding:"16px",
    boxSizing: 'border-box',
    borderRadius: "4px",
    position: "relative",
    margin: "0 auto",
    width: "85%",
    backgroundColor: "#f0f5f5",
    display: 'flex', //added later
    flexGrow: 1
});

export const MainContent = () => {
    return (
        <>
            <Sidebar />
            <Container>
                <Outlet />
            </Container>
        </>
    )
}


