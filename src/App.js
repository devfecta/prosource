import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Container from '@mui/material/Container';
import { Box, CssBaseline } from '@mui/material';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import './App.css';



function App() {
  return (
    
    
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
  );
}

export default App;
