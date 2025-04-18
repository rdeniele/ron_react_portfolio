import { useState } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.logo}>
        <a href="#home">Ron&#39;s Portfolio</a>
      </div>
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
      </div>
      
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;