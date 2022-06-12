import { Box, InputBase, styled } from '@mui/material';

const Component = styled(Box)`
    background: #F6F6F6;
    & > div {
        margin: 10px;
    }
`;


const BreadCrumb = ({ onTextChange, onCountChange }) => {
    
    return (
        <Component m={1}>
            <InputBase 
                onChange={(e) => onTextChange(e.target.value)}
                placeholder="Search images" 
            />
            <InputBase 
                onChange={(e) => onCountChange(e.target.value)}
                placeholder="Number of images" 
                type="number"
            />
        </Component>
    )
}

export default BreadCrumb;