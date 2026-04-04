import { Component } from 'react';
import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { FaWordpress } from 'react-icons/fa';
// import Portfolio from './portfolio/Portfolio';

class Footer extends Component {
    render() {
        return (
            <Box component="footer" >
                <Container maxWidth="lg" sx={{flexDirection: { xs: 'column', sm: 'row' }}} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography component="p" margin={0} gutterBottom>
                        Developed by&nbsp;
                        <Link href="https://devfecta.com" color="inherit" underline="hover" target="_blank" rel="noopener noreferrer">
                            DevFecta
                        </Link>
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 1 }}>
                        <IconButton aria-label="Facebook" align="right" color="inherit" href="https://www.facebook.com/prosourcepayments" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton aria-label="Twitter" align="right" color="inherit" href="https://twitter.com/gabprosource" target="_blank" rel="noopener noreferrer">
                            <XIcon />
                        </IconButton>
                        <IconButton aria-label="Instagram" align="right" color="inherit" href="https://www.instagram.com/prosourcepayments/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </IconButton>
                    </Box>

                    
                </Container>
            </Box>
        );
    }
}

export default Footer;