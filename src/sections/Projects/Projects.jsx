// import React from 'react';
import styles from './ProjectsStyles.module.css';
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
import ProjectCard from '../../common/ProjectCard';



function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <h2 className="sectionTitle">Client Work</h2>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={BeachwayImage}
            link="https://beachwayporta.com"
            h3="Beachway Vacation Rentals"
            p="Real Estate Website developed using Guesty"
            />
            <ProjectCard
            src={DwellImage}
            link="dwellluxuryrentals-8hm3.guestywebsites.com"
            h3="Dwell Vacation Rentals"
            p="Real Estate Website developed using Guesty"
            />

            <ProjectCard
            src={HTCImage}
            link="https://home-team-capital.com"
            h3="Home Team Capital"
            p="Real Estate Website developed using WordPress"
            />

            <ProjectCard
            src={HTLRImage}
            link="https://hometeamluxuryrealty.com"
            h3="Home Team Luxury Realty"
            p="Real Estate Website developed using WordPress"
            />

            <ProjectCard
            src={HTVRImage}
            link="https://hometeamvr.com"
            h3="Home Team Vacation Rentals"
            p="Real Estate Website developed using Guesty"
            />

            <ProjectCard
            src={SunriseImage}
            link="http://guesty.eu-responsivesiteeditor.com/preview/a29e8b4550dc406babc662d161e025aa"
            h3="Sunrise Beach Vacation Rentals"
            p="Sunrise Beach Vacation Rentals developed using Guesty"
            />
        </div>
        <br/>
        <h2 className="sectionTitle">Academic Projects</h2>
        <div className={styles.projectsContainer}>
            <ProjectCard
            src={KanokanoImage}
            link="https://github.com/rdeniele/coffee_shop2"
            h3="Kanokano Coffee Shop"
            p="Coffee CRUD and POS system developed using Laravel"
            />

            <ProjectCard
            src={LBMSImage}
            link="https://github.com/rdeniele/coffee_shop2"
            h3="Library Management System"
            p="Library Management System with CRUD developed using native PHP"
            />

            <ProjectCard
            src={MTSImage}
            link="https://github.com/rdeniele/money_transfer"
            h3="Money Transfer System"
            p="Money Transfer System with CRUD developed using Laravel"
            />

            <ProjectCard
            src={PBImage}
            link="https://github.com/rdeniele/phonebok_laravel"
            h3="Phonebook"
            p="Phonebook with CRUD developed using Laravel"
            />

            <ProjectCard
            src={RunThruImage}
            link="https://github.com/rdeniele/run_thru"
            h3="Run Thru"
            p="Run Thru a 2d game developed using C# Unity"
            />
            </div>
    </section>
  )
}

export default Projects;