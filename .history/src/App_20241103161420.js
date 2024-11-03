/** @format */

import {
	HashRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import CafedaManha from './Components/pages/CafedaManha';
import Almoco from './Components/pages/Almoco.js';
import Jantar from './Components/pages/Jantar';
import Sobremesa from './Components/pages/Sobremesa';
import Lanche from './Components/pages/Lanche';
import Inicio from './Components/pages/Inicio';
import Container from './Components/pages/layout/Container';
import Navbar from './Components/pages/layout/Navbar';
import { receitas } from './utils/receitas';
import PaginaReceita from './Components/pages/PaginaReceita.js';
import ScrollToTop from './Components/ScrollToTop.js';
import Cadastro from './Components/pages/Cadastro.js';

function App() {
	const location = useLocation();

	// Rota que não exibe a Navbar
	const hideNavbarRoutes = ['/cadastro'];

	return (
		<Router>
			<ScrollToTop />
			{/* Renderiza a Navbar somente se a rota atual não estiver em hideNavbarRoutes */}
			{!hideNavbarRoutes.includes(location.pathname) && (
				<Navbar receitas={receitas} />
			)}
			<Container customClass='min-height'>
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/cafedamanha' element={<CafedaManha />} />
					<Route path='/almoco' element={<Almoco />} />
					<Route path='/jantar' element={<Jantar />} />
					<Route path='/sobremesa' element={<Sobremesa />} />
					<Route path='/lanche' element={<Lanche />} />
					<Route path='/receitas/:id' element={<PaginaReceita />} />
					<Route path='/cadastro' element={<Cadastro />} />{' '}
					{/* Rota sem Navbar */}
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
