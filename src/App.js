import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from '../src/components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { store } from './features/store';
import { Provider } from 'react-redux';

function App() {
	return (
		<>
			<Provider store={store}>
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
			</Provider>
		</>
	);
}

export default App;
