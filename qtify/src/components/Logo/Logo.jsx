import logo from '../../assets/logo.png';  // Fixed path from components/Logo/
import styles from './Logo.module.css';

const Logo = () => (
  <img src={logo} alt="QTify" className={styles.logo} />
);

export default Logo;

