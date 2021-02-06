import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import logo from '../images/logo.jpg';

const useStyle = makeStyles({
    header: {
        background: '#000000'
    },
    logo: {
        width: 250
    }
});

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <img className={classes.logo} src={logo} alt="got" />
            </Toolbar>
        </AppBar>

    )
}

export default Header;