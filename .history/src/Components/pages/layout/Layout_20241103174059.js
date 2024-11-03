/** @format */

// Layout.js
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.js';
import Container from './Container.js';

const Layout = ({ children }) => {
	const location = useLocation();
	const hideNavbarRoutes = ['/cadastro', '/login']; // Defina as rotas onde a Navbar deve estar oculta

	return (
		<>
			{!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
			<Container customClass='min-height'>{children}</Container>
		</>
	);
};

export default Layout;
