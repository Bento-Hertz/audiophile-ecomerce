import { useEffect, useState } from 'react';
import Nav from '../Nav/nav';
import styles from './header.module.scss';
import heroMobile from 'assets/home/mobile/image-header.jpg';
import heroTablet from 'assets/home/tablet/image-header.jpg';
import heroDesktop from 'assets/home/desktop/image-header.jpg';
import { useLocation } from 'react-router';
import NewProduct from './NewProduct/new-product';
import { useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';

export default function Header() {

    const [heroImage, setHeroImage] = useState(``);

    const location = useLocation();
    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(location.pathname === '/') {
            if(currentBreakpoint === 'tablet' || currentBreakpoint === 'desktop')
                setHeroImage(`url(${heroDesktop})`);
            else if(window.innerWidth >= 500)
                setHeroImage(`url(${heroTablet})`);
            else
                setHeroImage(`url(${heroMobile})`);
        }
    }, [currentBreakpoint, location]);

    return (
        <header style={{backgroundImage: heroImage}} className={`${styles.header} container`}>
            <Nav />

            {location.pathname === '/' ?
                <NewProduct/>
            :
                <></>
            }
            
        </header>
    );
}