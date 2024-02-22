import styled from "@emotion/styled";
import { PropsWithChildren } from "react";



const ModalDiv = styled.div(_props => ({
    position: 'fixed',
    backgroundColor: "white",
    boxShadow: '1px 1px 8px #555',
    padding: '12px',
    width: '50%',
    // margin:'auto',
    top: '15%',
    left: '25%',
    borderRadius:'6px'
}));


type ModalProps = {
    isOpen: boolean
}

const Modal = (props: PropsWithChildren<ModalProps>) => {

    return (
        <>
            {
                props.isOpen ?
                    <ModalDiv>
                        {props.children}
                    </ModalDiv> : ''
           }
        </>
    )
}


export default Modal;