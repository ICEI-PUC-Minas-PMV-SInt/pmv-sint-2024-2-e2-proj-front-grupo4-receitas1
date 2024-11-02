/** @format */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CafedaManha from './Components/pages/CafedaManha';
import Almoço from './Components/pages/Almoco.js';
import Jantar from './Components/pages/Jantar';
import Sobremesa from './Components/pages/Sobremesa';
import Lanche from './Components/pages/Lanche';
import Inicio from './Components/pages/Inicio';
import Container from './Components/pages/layout/Container';
import Navbar from './Components/pages/layout/Navbar';
import { receitas } from './utils/receitas'; // Caminho correto para receitas
import PaginaReceita from './Components/pages/PaginaReceita.js';

function App() {
	return (
		<Router>
			<Container customClass='min-height'>
				<Navbar receitas={receitas} /> {/* Passa as receitas para o Navbar */}
				<Routes>
					<Route path='/' element={<Inicio />} />
					<Route path='/cafedamanha' element={<CafedaManha />} />
					<Route path='/almoco' element={<Almoço />} />
					<Route path='/jantar' element={<Jantar />} />
					<Route path='/sobremesa' element={<Sobremesa />} />
					<Route path='/lanche' element={<Lanche />} />
					<Route path='/receitas/:id' element={<PaginaReceita />} />
				</Routes>
			</Container>
		</Router>
	);
}

export default App;
