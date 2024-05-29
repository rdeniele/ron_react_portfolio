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
        <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Next" />
        <SkillList src={checkMarkIcon} skill="Express" />
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
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
        <SkillList src={checkMarkIcon} skill="C++" />
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Photoshop" />
        <SkillList src={checkMarkIcon} skill="Blender" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="WordPress" />
        <SkillList src={checkMarkIcon} skill="Guesty" />
        <SkillList src={checkMarkIcon} skill="SquareSpace" />
        <SkillList src={checkMarkIcon} skill="Wix" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Tensorflow" />
        <SkillList src={checkMarkIcon} skill="PyTorch" />
        <SkillList src={checkMarkIcon} skill="OpenCV" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="scikit-learn" />
        <SkillList src={checkMarkIcon} skill="NLTK" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="PostgresSQL" />
        <SkillList src={checkMarkIcon} skill="Jupyter" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SAP Analytics Cloud" />
        <SkillList src={checkMarkIcon} skill="SAP Build Apps." />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
