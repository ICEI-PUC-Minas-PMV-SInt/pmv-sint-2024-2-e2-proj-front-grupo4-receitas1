import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CafedaManha from './Components/pages/CafedaManha';
import Almoço from './Components/pages/Almoço';
import Jantar from './Components/pages/Jantar';
import Sobremesa from './Components/pages/Sobremesa';
import Lanche from './Components/pages/Lanche';
import Inicio from './Components/pages/Inicio';
import Container from './Components/pages/layout/Container';
import Navbar from './Components/pages/layout/Navbar';

function App() {
  return (
    <Router>
      <Container customClass="min-height">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cafedamanha" element={<CafedaManha />} />
          <Route path="/almoco" element={<Almoço />} />
          <Route path="/jantar" element={<Jantar />} />
          <Route path="/sobremesa" element={<Sobremesa />} />
          <Route path="/lanche" element={<Lanche />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
