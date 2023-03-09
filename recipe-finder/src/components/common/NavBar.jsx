
import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <img src={logo} alt="logo" style={{ width: 150 }} />
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
        </Menu>
    )
}

export default NavBar;