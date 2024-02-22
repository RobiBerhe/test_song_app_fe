import styled from "@emotion/styled";

interface BoxProps {
    // flex?:true,
    flex?:boolean,
    direction?:"column" | "row" |"column-reverse" | "row-reverse"
    // direction?:"column" | "row" 
}

const Box = styled.div<BoxProps>(props=>({
    display: (props.flex) ? "flex" : 'initial',
    flexDirection: props.direction,
}));


export default Box;