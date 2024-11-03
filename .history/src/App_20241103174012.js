/** @format */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CafedaManha from './Components/pages/CafedaManha';
import Almoco from './Components/pages/Almoco.js';
import Jantar from './Components/pages/Jantar';
import Sobremesa from './Components/pages/Sobremesa';
import Lanche from './Components/pages/Lanche';
import Inicio from './Components/pages/Inicio';
import PaginaReceita from './Components/pages/PaginaReceita.js';
import ScrollToTop from './Components/ScrollToTop.js';
import Cadastro from './Components/pages/Cadastro.js';
import Layout from './Components/pages/layout/Layout.js';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Layout>
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/cafedamanha' element={<CafedaManha />} />
					<Route path='/almoco' element={<Almoco />} />
					<Route path='/jantar' element={<Jantar />} />
					<Route path='/sobremesa' element={<Sobremesa />} />
					<Route path='/lanche' element={<Lanche />} />
					<Route path='/receitas/:id' element={<PaginaReceita />} />
					<Route path='/cadastro' element={<Cadastro />} />
					<Route path='/login' element={<Login />} /> {/* Rota sem Navbar */}
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
