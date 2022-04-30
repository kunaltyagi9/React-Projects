

import { AppBar, Toolbar, styled } from '@mui/material';
import logo from '../images/logo.jpg';

const StyledHeader = styled(AppBar)`
    background: #000000
`;

const Image = styled('img')({
    width: 250
});


const Header = () => {
    
    return (
        <StyledHeader position="static">
            <Toolbar>
                <Image src={logo} alt="got" />
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;