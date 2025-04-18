import { useState, useRef } from 'react';
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

function Projects() {
  const [currentIndex, setCurrentIndex] = useState({
    backEnd: 0,
    ai: 0,
    gamedev: 0,
    webdesign: 0
  });

  const backEndTrackRef = useRef(null);
  const aiTrackRef = useRef(null);
  const gamedevTrackRef = useRef(null);
  const webdesignTrackRef = useRef(null);

  const navigate = (direction, section) => {
    const trackRef = {
      backEnd: backEndTrackRef,
      ai: aiTrackRef,
      gamedev: gamedevTrackRef,
      webdesign: webdesignTrackRef
    }[section];

    const totalItems = trackRef.current.children.length;
    const containerWidth = trackRef.current.parentElement.offsetWidth;
    const itemWidth = 330;
    const visibleItems = Math.floor(containerWidth / itemWidth);
    const maxIndex = Math.max(0, totalItems - visibleItems);

    setCurrentIndex(prev => {
      const newIndex = prev[section] + direction;
      return {
        ...prev,
        [section]: Math.max(0, Math.min(newIndex, maxIndex))
      };
    });
  };

  const createCarouselItems = (items) => {
    return items.map((item, index) => (
      <div key={index} className={styles.carouselItem}>
        <ProjectCard {...item} />
      </div>
    ));
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
  ];

  const gamedevProjects = [
    { src: RunThruImage, link: "https://github.com/rdeniele/run_thru", h3: "Run Thru", p: "2D game developed using C# in Unity" }
  ];

  const webdesignProjects = [
    { src: BeachwayImage, link: "https://beachwayporta.com", h3: "Beachway Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: DwellImage, link: "https://dwellluxuryrentals-8hm3.guestywebsites.com", h3: "Dwell Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: HTCImage, link: "https://home-team-capital.com", h3: "Home Team Capital", p: "Website via WordPress, HTML, CSS" },
    { src: HTLRImage, link: "https://hometeamluxuryrealty.com", h3: "Home Team Luxury Realty", p: "Website via WordPress, HTML, CSS" },
    { src: HTVRImage, link: "https://hometeamvr.com", h3: "Home Team Vacation Rentals", p: "Real Estate Website via Guesty" },
    { src: SunriseImage, link: "http://guesty.eu-responsivesiteeditor.com/preview/a29e8b4550dc406babc662d161e025aa", h3: "Sunrise Beach Rentals", p: "Vacation Rentals via Guesty" },
  ];

  const renderCarousel = (title, section, data, ref) => (
    <>
      <h2 className="sectionTitle">{title}</h2>
      <div className={styles.projectsContainer}>
        <button
          className={`${styles.carouselNav} ${styles.prevButton}`}
          onClick={() => navigate(-1, section)}
          aria-label="Previous projects"
        >
          &lt;
        </button>
        <div
          className={styles.carouselTrack}
          ref={ref}
          style={{ transform: `translateX(-${currentIndex[section] * 330}px)` }}
        >
          {createCarouselItems(data)}
        </div>
        <button
          className={`${styles.carouselNav} ${styles.nextButton}`}
          onClick={() => navigate(1, section)}
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
      <br /><br />
      {renderCarousel("Back-End", "backEnd", backEndProjects, backEndTrackRef)}
      {renderCarousel("Artificial Intelligence / Machine Learning / Data Sci", "ai", aiProjects, aiTrackRef)}
      {renderCarousel("Game Development", "gamedev", gamedevProjects, gamedevTrackRef)}
      {renderCarousel("Web Design", "webdesign", webdesignProjects, webdesignTrackRef)}
    </section>
  );
}

export default Projects;
