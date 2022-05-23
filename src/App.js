import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className="container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:imdbID" element={<MovieDetail />} />
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
