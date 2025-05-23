import { useState } from 'react';
import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

// Images
import BeachwayImage from '../../assets/Beachway.png';
import DwellImage from '../../assets/Dwell.png';
import HTCImage from '../../assets/HTC.png';
import HTLRImage from '../../assets/HTLR.png';
import HTVRImage from '../../assets/HTVR.png';
import KanokanoImage from '../../assets/Kanokano.png';
import LBMSImage from '../../assets/LBMS.png';
import MTSImage from '../../assets/MTS.png';
import PBImage from '../../assets/PB.png';
import SunriseImage from '../../assets/Sunrise.png';
import RunThruImage from '../../assets/runthru.png';
import EmployImage from '../../assets/Employ.png';
import BudYetImage from '../../assets/BudYetImage.png';
import SignItOnImage from '../../assets/sign-it-on.jpg';
import Sign2Image from '../../assets/sign-it-on-2.jpg';
import BattLife from '../../assets/predict_batt_life_linear_reg.png';
import BoxMatch from '../../assets/predict_box_match_logistic_reg.png';
import CpuTemp from '../../assets/predict_cpu_temp_linear_reg.png';
import Thoughts from '../../assets/THOUGHTS.png';
import mmaMatch from '../../assets/predict_mma_match_decision_tree.png';
import parrot from '../../assets/predict_parrot_species_SVC.png';
import bookTrack2 from '../../assets/FlutterBookTrack2.png';
import unloadly from '../../assets/Unloadly.png';

function Projects() {
  const [currentSlide, setCurrentSlide] = useState({
    backEnd: 0,
    ai: 0,
    gamedev: 0,
    webdesign: 0,
    mobdev: 0
  });

  // Check if mobile view
  const isMobile = window.innerWidth < 768;
  
  // Simplified navigation function
  const navigate = (direction, section, totalItems) => {
    setCurrentSlide(prev => {
      let newIndex = prev[section] + direction;
      
      // Simple wrapping logic
      if (newIndex < 0) newIndex = totalItems - 1;
      if (newIndex >= totalItems) newIndex = 0;
      
      return { ...prev, [section]: newIndex };
    });
  };

  const backEndProjects = [
    { src: KanokanoImage, link: "https://github.com/rdeniele/coffee_shop2", h3: "Kanokano Coffee Shop", p: "Coffee CRUD and POS system developed using Laravel" },
    { src: LBMSImage, link: "https://github.com/rdeniele/coffee_shop2", h3: "Library Management System", p: "Library Management System with CRUD developed using native PHP" },
    { src: MTSImage, link: "https://github.com/rdeniele/money_transfer", h3: "Money Transfer System", p: "Money Transfer System with CRUD developed using Laravel" },
    { src: PBImage, link: "https://github.com/rdeniele/phonebok_laravel", h3: "Phonebook", p: "Phonebook with CRUD developed using Laravel" },
    { src: BudYetImage, link: "https://github.com/Lowkiiii/bud_yet/tree/master", h3: "Bud Yet", p: "Finance Tracking System with CRUD developed using Laravel, Tailwind, ShadCN, and Typescript" },
    { src: EmployImage, link: "https://github.com/rdeniele/employment_management", h3: "Employment Management System", p: "Employment CRUD using Code Igniter" },
    { src: SignItOnImage, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "Sign it On", p: "ASL-to-Text-to-Speech Web App using Django & TensorFlow" },
  ];

  const aiProjects = [
    { src: Sign2Image, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "Sign it On", p: "ASL-to-Text-to-Speech Web App using Django & TensorFlow" },
    { src: BattLife, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "Battery Life Prediction", p: "Predict battery life using Linear Regression" },
    { src: BoxMatch, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "Boxing Match Prediction", p: "Predict boxing winners using Logistic Regression" },
    { src: CpuTemp, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "CPU Temp Prediction", p: "Predict laptop CPU temp using Linear Regression" },
    { src: mmaMatch, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "MMA Match Prediction", p: "Predict MMA Match using Decision Tree" },
    { src: parrot, link: "https://github.com/rdeniele/ASL_TO_TEXT_WEB.git", h3: "Parrot Species Prediction", p: "Predict Parrot Species using SVC" },
  ];

  const gamedevProjects = [
    { src: RunThruImage, link: "https://github.com/rdeniele/run_thru", h3: "Run Thru", p: "2D game developed using C# in Unity" }
  ];

  const webdesignProjects = [
    { src: unloadly, link: "https://unloadly.vercel.app/", h3: "Unloadly", p: "An affiliate website to LoadUp, a moving and clean up company and this is made with Next.Js" },
    { src: BeachwayImage, link: "https://beachwayporta.com", h3: "Beachway Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: DwellImage, link: "https://dwellluxuryrentals-8hm3.guestywebsites.com", h3: "Dwell Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: HTCImage, link: "https://home-team-capital.com", h3: "Home Team Capital", p: "Website via WordPress, HTML, CSS" },
    { src: HTLRImage, link: "https://hometeamluxuryrealty.com", h3: "Home Team Luxury Realty", p: "Website via WordPress, HTML, CSS" },
    { src: HTVRImage, link: "https://hometeamvr.com", h3: "Home Team Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: SunriseImage, link: "http://guesty.eu-responsivesiteeditor.com/preview/a29e8b4550dc406babc662d161e025aa", h3: "Sunrise Beach Rentals", p: "Vacation Rentals via Guesty" },
  ];

  const mobdevProjects = [
    { src: Thoughts, link: "https://github.com/rdeniele/thoughts.git", h3: "Thoughts", p: "A bit-sized review platform made with Flutter using the MVVM architecture." },
    { src: bookTrack2, link: "https://github.com/CjohnA/booktrack2_2.git", h3: "BookTrack2", p: "A library management system tailored for librarians and students to help them track the books made with Flutter using the MVVM architecture." },
    
  ];


  // Simplified carousel renderer
  const renderCarousel = (title, section, projects) => (
    <>
      <h2 className={`sectionTitle ${styles.categoryHeading}`}>{title}</h2>
      <div className={styles.projectCount}>{projects.length} projects</div>
      {isMobile && <div className={styles.swipeHint}>Swipe or tap arrows to navigate</div>}
      
      <div className={styles.projectsContainer}>
        <button
          className={`${styles.carouselNav} ${styles.prevButton}`}
          onClick={() => navigate(-1, section, projects.length)}
          aria-label="Previous projects"
        >
          &lt;
        </button>
        
        <div className={styles.carouselViewport}>
          <div 
            className={styles.carouselTrack}
            style={{ 
              transform: `translateX(-${currentSlide[section] * (isMobile ? 100 : 330)}px)` 
            }}
          >
            {projects.map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <div className={styles.projectCard}>
                  <ProjectCard {...item} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className={`${styles.carouselNav} ${styles.nextButton}`}
          onClick={() => navigate(1, section, projects.length)}
          aria-label="Next projects"
        >
          &gt;
        </button>
      </div>
      <br /><br />
    </>
  );

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      {renderCarousel("Back-End", "backEnd", backEndProjects)}
      {renderCarousel("Artificial Intelligence / Machine Learning / Data Sci", "ai", aiProjects)}
      {renderCarousel("Mobile Development", "mobdev", mobdevProjects)}
      {renderCarousel("Game Development", "gamedev", gamedevProjects)}
      {renderCarousel("Web Design", "webdesign", webdesignProjects)}
    </section>
  );
}

export default Projects;
