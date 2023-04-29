import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryProd from './components/Category/CategoryProd';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import SingleProduct from './components/SingleProduct/SingleProduct';
import AppContext from './utils/context';
import ScrollToTop from './hooks/ScrollToTop';
import DropDown from './components/Header/DropDown/DropDown';



function App() {
	return (
		<BrowserRouter>
			<ScrollToTop/>
			<AppContext>
				<Header />				
				<Routes>  
					<Route path='/' element={<Home />} />
					<Route path='/category/:id' element={<CategoryProd />} />
					<Route path='/product/:id' element={<SingleProduct />} />
					<Route path='/about/' element={<About />} />
					<Route path='/about/' element={<About />} />
				</Routes>
				<Newsletter />
				<Footer />
			</AppContext>
		</BrowserRouter>
	);
};

export default App;
