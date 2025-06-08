import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        {/* <SkillList src={checkMarkIcon} skill="Node" /> */}
      </div>
      
      {/* <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PostGresSQL" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next" />
      </div> */}

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Laravel" />
        <SkillList src={checkMarkIcon} skill="Blade" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="XAMPP" />
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="C#" />
        <SkillList src={checkMarkIcon} skill="ASP.NET" />
        {/* <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Unity" />
        <SkillList src={checkMarkIcon} skill="Blender" /> */}
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Tensorflow" />
        <SkillList src={checkMarkIcon} skill="Django" />
        {/* <SkillList src={checkMarkIcon} skill="MongoDB" /> */}
      </div>

      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Code Igniter" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        {/* <SkillList src={checkMarkIcon} skill="Bootstrap" /> */}
      </div>
      <hr />

      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="WordPress" />
        <SkillList src={checkMarkIcon} skill="Guesty" />
        <SkillList src={checkMarkIcon} skill="Webflow" />
        <SkillList src={checkMarkIcon} skill="Wix" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
