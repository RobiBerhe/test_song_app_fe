import styled from "@emotion/styled";


// enum colorTypes {
//     primary = "primary",
//     secondary = "secondary",
//     default = "default"
// }

interface ButtonProps {
    color?: "primary" | "default" | "secondary",
    radius?:"sm" | "md" | "lg",
    m?: number
}

const Button = styled.button<ButtonProps>(props => ({
    padding: "8px 16px",
    border:'0px',
    cursor:'pointer',
    backgroundColor:"#119af0",
    color:"#fff",
    borderRadius:"4px",
    fontSize:"15px",
    ":active":{
        backgroundColor:"#0d8fe0",
        boxShadow:"inset 1px 1px #119af0"
    },
    margin: (props.m) ? props.m: 'inherit',
    ":disabled":{
        backgroundColor:"#91bbff",
        boxShadow:"none",
        cursor:"default"
    }
    // backgroundColor:( props.color) ? props.color == colorTypes.primary ? "skyblue" : props.color == colorTypes.secondary ? "#ddd" : props.color == colorTypes.default ? "inherit" : "inherit" : "inherit",
}));

export default Button;