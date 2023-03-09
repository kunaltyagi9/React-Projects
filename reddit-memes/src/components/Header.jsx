

import { AppBar, Toolbar } from '@mui/material';

const Header = () => {

    const logo = 'https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.jpg';

    return (
        <AppBar color="action" position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 100 }} />
            </Toolbar>
        </AppBar>
    )
}

export default Header;