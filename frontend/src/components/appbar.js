import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Discover Ello', 'Parental Resources'];

export default function SearchAppBar({ sidebarWidth, isClosing, setMobileOpen, mobileOpen, searchInput }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar
            position="fixed"
            color="white"
            elevation={1}
            sx={{
                width: { sm: `calc(100% - ${sidebarWidth}px)` },
                ml: { sm: `${sidebarWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}>
                    {searchInput}
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end", }} >
                    {pages.map((page) => (
                        <Button
                            key={page}
                            color="secondary"
                            sx={{ textTransform: 'capitalize', mx: 1 }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton edge="end" onClick={handleOpenUserMenu}>
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {pages.map((pages) => (
                            <MenuItem key={pages} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{pages}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

            </Toolbar>

        </AppBar>
    );
}
