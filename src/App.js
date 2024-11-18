import React, { createContext, useState } from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	useParams,
} from "react-router-dom";
import CafedaManha from "./Components/pages/CafedaManha";
import Almoco from "./Components/pages/Almoco";
import Jantar from "./Components/pages/Jantar";
import Sobremesa from "./Components/pages/Sobremesa";
import Lanche from "./Components/pages/Lanche";
import Inicio from "./Components/pages/Inicio";
import PaginaReceita from "./Components/pages/PaginaReceita";
import ScrollToTop from "./Components/ScrollToTop";
import Cadastro from "./Components/pages/Cadastro";
import Layout from "./Components/pages/layout/Layout";
import Login from "./Components/pages/Login";
import PerfilUsuario from "./Components/pages/PerfilUsuario";
import ReceitasSalvas from "./Components/pages/ReceitasSalvas";
import AdicionarReceita from "./Components/pages/AdicionarReceita";

// Contexto para busca
export const SearchContext = createContext();

function App() {
	const [searchQuery, setSearchQuery] = useState(""); // Estado de pesquisa

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			<Router>
				<ScrollToTop />
				<Layout>
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/cafedamanha" element={<CafedaManha />} />
						<Route path="/almoco" element={<Almoco />} />
						<Route path="/jantar" element={<Jantar />} />
						<Route path="/sobremesa" element={<Sobremesa />} />
						<Route path="/lanche" element={<Lanche />} />
						<Route path="/receitas/:id" element={<RouteReceitaWrapper />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/login" element={<Login />} />
						<Route path="/perfilusuario" element={<PerfilUsuario />} />
						<Route path="/receitas-salvas" element={<ReceitasSalvas />} />
						<Route path="/adicionar-receita" element={<AdicionarReceita />} />
					</Routes>
				</Layout>
			</Router>
		</SearchContext.Provider>
	);
}

function RouteReceitaWrapper() {
	const { id } = useParams();
	return <PaginaReceita key={id} />;
}

export default App;
