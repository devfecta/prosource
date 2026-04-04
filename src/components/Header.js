import { Component, useState } from 'react';
import { Box, Container, AppBar, Drawer, Toolbar, Button, IconButton, Typography, Icon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { FaWordpress } from 'react-icons/fa';
// import Portfolio from './portfolio/Portfolio';



export default function Header (props) {

    //render() {

        const [open, setOpen] = useState(false);

        const toggleDrawer = (newOpen) => () => {
            setOpen(newOpen);
        };
        
        return (
            <>
                <AppBar position="fixed" color="secondary" elevation={4}>
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

                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {/* {DrawerList} */}
                    test
                </Drawer>
            </>

        );
    //}
}

// export default Header;