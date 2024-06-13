import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

import BrandLogo from './logo.js';

export default function Sidebar({ sidebarWidth, setIsClosing, setMobileOpen, mobileOpen, bookShelfOnClick, readingListOnClick }) {
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const sidebar = (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between' }}>

            <List>
                <ListItem key={'Bookshelf'} disablePadding>
                    <ListItemButton onClick={bookShelfOnClick}>
                        <ListItemIcon>
                            <AutoStoriesOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Bookshelf'} />
                    </ListItemButton>
                </ListItem>
                <ListItem key={'ReadingList'} disablePadding>
                    <ListItemButton onClick={readingListOnClick}>
                        <ListItemIcon>
                            <FormatListBulletedOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Reading List'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                {['Logout', 'Profile'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <ExitToAppOutlinedIcon /> : <AdminPanelSettingsOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>

    );

    return (
        <>
            <Box
                component="nav"
                sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
                    }}
                >
                    <BrandLogo width={sidebarWidth} />

                    {sidebar}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sidebarWidth },
                    }}
                    open
                >
                    <BrandLogo width={sidebarWidth} />
                    {sidebar}
                </Drawer>
            </Box>
        </>
    );
}
