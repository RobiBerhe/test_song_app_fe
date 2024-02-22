import styled from "@emotion/styled";



export const Table = styled.table(_props =>({
    overflow:"auto",
}));


export const Thead = styled.thead(_props => ({

    "& tr": {
        border: "1px solid #ccc"
    },
    "& tr > th": {
        border: "1px solid #ccc",
        textAlign: "start",
        padding: "8px"
    },
}))


export const Tbody = styled.tbody(_props => ({

    "& tr": {
        border: "1px solid #ccc"
    },
    "& tr:hover": {
        backgroundColor: "#eee"
    },
    "& tr > td": {
        border: "1px solid #ccc",
        textAlign: "start",
        padding: "8px"
    },
}));

