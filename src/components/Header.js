import { Component, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { 
    Box, Container, Toolbar, Button, IconButton, Typography, Icon, 
    List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AtmIcon from '@mui/icons-material/Atm';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


// import Portfolio from './portfolio/Portfolio';



export default function Header (props) {

    //render() {
        const theme = useTheme();

        const [open, setOpen] = useState(false);

        const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
        };

        const handleDrawerOpen = () => {
            setOpen(true);
        };

        const handleDrawerClose = () => {
            setOpen(false);
        };

        const drawerWidth = 240;

        const openedMixin = (theme) => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
        });

        const closedMixin = (theme) => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
        });

        const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        }));

        const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
        })(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        variants: [
            {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
                }),
            },
            },
        ],
        }));

        const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            variants: [
            {
                props: ({ open }) => open,
                style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
            ],
        }),
        );

        const DrawerMenu = (
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={[ open ? { opacity: 1, } : { opacity: 0, }, ]} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="/atms">
                            <ListItemIcon>
                                <AtmIcon />
                            </ListItemIcon>
                            <ListItemText primary="ATMs" sx={[ open ? { opacity: 1, } : { opacity: 0, }, ]} />
                        </ListItemButton>
                    </ListItem>
                </List>
                {/* <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List> */}
            </Box>
        );
        
        return (
            <>
                <AppBar position="fixed" color="secondary" elevation={4} open={open}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}

                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box component="img" src="./images/ProSource-White.png" alt="ProSource Payments" sx={{ display: { xs: 'none', md: 'flex' }, height: '40px', mr: 1 }} />
                        <Typography component="p" sx={{display: { xs: 'flex', md: 'none' }}}>
                            ProSource Payments
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} paddingX={"1rem"} justifyContent={'end'}>
                            <Button color="inherit">Login</Button>
                        </Box>
                        
                    </Toolbar>
                </AppBar>

                <Drawer variant="permanent" open={open} onClose={toggleDrawer(false)}>
                    <DrawerHeader>
                        <IconButton onClick={toggleDrawer(false)}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    {DrawerMenu}
                </Drawer>
            </>

        );
    //}
}

// export default Header;