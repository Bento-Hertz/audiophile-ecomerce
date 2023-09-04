import styles from './about-us.module.scss';
import bestGearMobile from 'assets/shared/mobile/image-best-gear.jpg';
import bestGearTablet from 'assets/shared/tablet/image-best-gear.jpg';
import bestGearDesktop from 'assets/shared/desktop/image-best-gear.jpg';
import { useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import { useEffect, useState } from 'react';

export default function AboutUs() {

    const [bestGearImage, setBestGearImage] = useState('');

    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(currentBreakpoint === 'desktop')
            setBestGearImage(bestGearDesktop);
        else if(currentBreakpoint === 'tablet')
            setBestGearImage(bestGearTablet);
        else
            setBestGearImage(bestGearMobile);
    }, [currentBreakpoint]);

    return (
        <section className={`${styles.aboutUs} sub-container`}>
            <div className={styles.bestGearImage}>
                <img src={bestGearImage} alt="" />
            </div>
            <div className={styles.content}>
                <h2>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </div>
        </section>
    );
}