import { Component } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { FaWordpress } from 'react-icons/fa';
// import Portfolio from './portfolio/Portfolio';

class Home extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to React with Material UI
                </Typography>
                <Button variant="contained" color="primary">
                    Click Me
                </Button>
            </Container>
        );
    }
}

export default Home;