import { Component } from 'react';
import { Box, Container, AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { FaWordpress } from 'react-icons/fa';
// import Portfolio from './portfolio/Portfolio';

class Header extends Component {
    render() {
        return (
            <Box component="header">
                <AppBar position="static" color="secondary" elevation={4}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default Header;