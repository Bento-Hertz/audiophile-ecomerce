import { useEffect, useState } from 'react';
import Nav from './Nav/nav';
import styles from './header.module.scss';
import heroMobile from 'assets/home/mobile/image-header.jpg';
import heroTablet from 'assets/home/tablet/image-header.jpg';
import heroDesktop from 'assets/home/desktop/image-header.jpg';
import { useLocation } from 'react-router';
import NewProduct from './NewProduct/new-product';

export default function Header() {

    const [heroImage, setHeroImage] = useState(``);

    const location = useLocation();
    function handleHero() {
        if(location.pathname === '/') {
            if(window.innerWidth >= 1200)
                setHeroImage(`url(${heroDesktop})`);
            else if(window.innerWidth >= 500)
                setHeroImage(`url(${heroTablet})`);
            else
                setHeroImage(`url(${heroMobile})`);
        }
    }

    useEffect(() => {
        handleHero();
        window.addEventListener('resize', handleHero);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <header style={{backgroundImage: heroImage}} className={styles.header}>
            <Nav />

            {location.pathname === '/' ?
                <NewProduct/>
            :
                <></>
            }
            
        </header>
    );
}