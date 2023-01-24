
import { MenuItem, Popper, MenuList, ClickAwayListener, Grow, Paper } from '@mui/material';

import { routePath } from '../../../constants/routes';

import { Link } from 'react-router-dom';

const HeaderMenu = ({ handleToggle, open, anchorRef }) => {

    return (
        <Popper
            open={open}
            anchorEl={anchorRef.current}
            placement="bottom-start"
            transition
            disablePortal
            style={{ zIndex: 9999 }}
        >
            {({ TransitionProps }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: 'left top' }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={handleToggle}>
                        <MenuList>
                                <Link to={`${routePath.categories}?category=popular`} style={{ textDecoration: 'none', color: 'inherit'}}>
                                    <MenuItem onClick={handleToggle}>Popular</MenuItem>
                                </Link>
                                <Link to={`${routePath.categories}?category=toprated`} style={{ textDecoration: 'none', color: 'inherit'}}>
                                    <MenuItem onClick={handleToggle}>Top Rated</MenuItem>
                                </Link>
                                <Link to={`${routePath.categories}?category=upcoming`} style={{ textDecoration: 'none', color: 'inherit'}}>
                                    <MenuItem onClick={handleToggle}>Upcoming</MenuItem>
                                </Link>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
}

export default HeaderMenu;