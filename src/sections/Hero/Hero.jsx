import { useEffect, useState } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ron.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full-stack Developer, Web designer, and AI Engineer";
  const [charIndex, setCharIndex] = useState(0);

  // Text typing animation effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setText(prev => prev + fullText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(typingTimer);
    }
  }, [charIndex, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.comicImageFrame}>
          <img
            src={heroImg}
            className={`${styles.hero} ${styles.wiggle}`}
            alt="Profile picture of Ron Paragoso"
          />
        </div>
        <img
          className={`${styles.colorMode} ${styles.wiggle}`}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={`${styles.info} ${styles.infoBox}`}>
        <h1 className={styles.comicHeading}>
          Ron Deniele
          <br />
          Paragoso
        </h1>
        <h2 className={styles.comicText}>
          {text}{showCursor ? '|' : ' '}
        </h2>
        <span className={styles.socialLinks}>
          <a href="https://x.com/r_deniele" target="_blank" className={styles.wiggle}>
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/rdeniele?tab=repositories" target="_blank" className={styles.wiggle}>
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/ron-deniele-paragoso-a96b1724b/" target="_blank" className={styles.wiggle}>
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={`${styles.description} ${styles.comicText} ${styles.animatedText} ${styles.comicDescription}`}>
          With passion for crafting responsive websites as a Back-End inclined Full-stack Developer, and diving into artificial intelligence and machine learning.
        </p>
        <a href={CV} download>
          <button className={`hover ${styles.wiggle} ${styles.bounceButton}`}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
