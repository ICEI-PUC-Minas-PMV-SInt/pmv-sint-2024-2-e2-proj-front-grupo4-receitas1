import { Link} from "react-router-dom"
import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../../img/logo.png'

function Navbar () {
return(
    <nav className={styles.navbar}>
        <Container>
            <Link to="/">
            <img className={styles.logo} src={logo} alt="Logosabordomomento" />
            </Link>
            <ul className={styles.list}>     
          <li className={styles.item}> <Link to="/">Início</Link> </li>
          <li className={styles.item}> <Link to="/cafedamanha">Café da Manhã</Link> </li>
          <li className={styles.item}> <Link to="/almoco">Almoço</Link> </li> 
          <li className={styles.item}> <Link to="/jantar">Jantar</Link> </li>
          <li className={styles.item}> <Link to="/sobremesa">Sobremesa</Link> </li>
          <li className={styles.item}> <Link to="/lanche">Lanche</Link> </li>
           </ul>
        </Container>
    </nav>

)

}
export default Navbar