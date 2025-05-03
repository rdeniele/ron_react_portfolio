import { useState, useEffect } from 'react';
import CertificateCard from '../../common/CertificateCard'; 
import styles from './CertificatesStyles.module.css'; 

// Import images
import IntroPythonImage from '../../assets/IntroDuction to Python.jpg';
import IntermediatePythonImage from '../../assets/Intermediate Python.jpg';
import PandasImage from '../../assets/Data Manipulation with Pandas.jpg';

const Certificates = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Check if mobile view
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    // Add window resize listener
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Certificate data
    const certificates = [
        {
            id: 1,
            title: 'Introduction to Python',
            issuer: 'DataCamp',
            date: 'October 15, 2024',
            image: IntroPythonImage,
        },
        {
            id: 2,
            title: 'Intermediate Python',
            issuer: 'DataCamp',
            date: 'March 29, 2025',
            image: IntermediatePythonImage,
        },
        {
            id: 3,
            title: 'Data Manipulation with Pandas',
            issuer: 'DataCamp',
            date: 'March 29, 2025',
            image: PandasImage,
        },
    ];

    // Navigation function
    const navigate = (direction) => {
        setCurrentSlide(prev => {
            let newIndex = prev + direction;
            
            // Wrapping logic
            if (newIndex < 0) newIndex = certificates.length - 1;
            if (newIndex >= certificates.length) newIndex = 0;
            
            return newIndex;
        });
    };

    return (
        <section id="certificates" className={styles.container}>
            <h1 className="sectionTitle">Certificates</h1>
            
            <div className={styles.sectionHeader}>
                <p>Professional qualifications and achievements</p>
            </div>
            
            <div className={styles.certificatesCount}>{certificates.length} certificates</div>
            {isMobile && <div className={styles.swipeHint}>Swipe or tap arrows to navigate</div>}
            
            <div className={styles.galleryWrapper}>
                <button 
                    className={`${styles.navButton} ${styles.prevButton}`}
                    onClick={() => navigate(-1)}
                    aria-label="View previous certificates"
                >
                    &lt;
                </button>
                
                <div className={styles.carouselViewport}>
                    <div 
                        className={styles.carouselTrack}
                        style={{ 
                            transform: `translateX(-${currentSlide * (isMobile ? 100 : 330)}px)` 
                        }}
                    >
                        {certificates.map((cert) => (
                            <div className={styles.carouselItem} key={cert.id}>
                                <div className={styles.certificateCard}>
                                    <CertificateCard
                                        src={cert.image}
                                        h3={cert.title}
                                        p={`${cert.issuer} • ${cert.date}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <button 
                    className={`${styles.navButton} ${styles.nextButton}`}
                    onClick={() => navigate(1)}
                    aria-label="View more certificates"
                >
                    &gt;
                </button>
            </div>
        </section>
    );
};

export default Certificates;