import { useState, useEffect } from 'react';
import { useTheme } from '../../common/ThemeContext';
import styles from './NavbarStyles.module.css';

function Navbar() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll detection to make navbar smaller when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Stop event from reaching document body
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const closeMenu = (e) => {
      if (!e.target.closest(`.${styles.navbar}`)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  // Add this useEffect to handle window resize events
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu on resize (helps with view switching)
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className={`${styles.navbar} ${styles[theme]} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="#hero">RP</a>
      </div>
      
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.menuBar} ${isMenuOpen ? styles.open : ''}`}></div>
      </div>
      
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li><a href="#hero" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;