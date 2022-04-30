
import { AppBar, Toolbar, styled, Box, InputBase, Input } from '@mui/material';
import logo from '../image/logo.png';
import SearchIcon from '@mui/icons-material/Search';

const StyledHeader = styled(AppBar)`
    background: #000;
    padding: 10px;
 `;   
    
const StyledComponent = styled(Box)`
    background-color: rgba(255, 255, 255, 0.15);
    margin-left: 10px;
    border-radius: 5px;
    position: relative;
`;

const StyledIcon = styled(SearchIcon)`
    position: absolute;
    margin-left: 10px;
    top: 3px;
`;

const InputBox = styled(InputBase)`
    color: inherit;
    margin: 0 50px;
`;

const Header = ({ getText }) => {
    
    return(
        <StyledHeader position="static">
            <Toolbar>
                <img style={{ width: 100 }} src={logo} alt="logo" />
                <StyledComponent>
                    <StyledIcon>
                        <SearchIcon />
                    </StyledIcon>
                    <InputBox 
                        placeholder="Search by name"
                        autoFocus
                        // classes = {{ root : classes.inputBox }}
                        onChange={(e) => getText(e.target.value)}
                    />
                </StyledComponent>
            </Toolbar>
        </StyledHeader>
    )
}


export default Header;