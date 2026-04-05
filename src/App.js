import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Container from '@mui/material/Container';
import { Box, CssBaseline } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import './App.css';



function App() {

	const theme = createTheme({
		palette: {
			primary: {
				main: "#88c343",
				contrastText: '#000000',
			},
			secondary: {
				main: "#8542C2",
				contrastText: '#ffffff',
			},
		},
	});

  return (
    <ThemeProvider theme={theme}>
		<Router basename="/">
		
			<CssBaseline />
			
			<Header />

			

			<Box component="main" flexGrow={1}>
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/services" element={<Services title={"Services - " + document.title} />} />
		
					<Route path="/confirmSubscription" Component={ConfirmSubscription} />

					<Route path="/portfolio/prosource" element={<Portfolio.Prosource technologies={this.state.workExperience.technologies} />} />	 */}
				</Routes>
			</Box>

			<Footer />

		</Router>
	</ThemeProvider>
  );
}

export default App;
