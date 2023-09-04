import Button from 'components/Button/button';
import styles from './products.module.scss';
import { useEffect, useState } from 'react';
import speakerZX9Icon from 'assets/home/desktop/image-speaker-zx9.png';

import speakerZX7BackgroundMobile from 'assets/home/mobile/image-speaker-zx7.jpg';
import speakerZX7BackgroundTablet from 'assets/home/tablet/image-speaker-zx7.jpg';
import speakerZX7BackgroundDesktop from 'assets/home/desktop/image-speaker-zx7.jpg';

import earphoneYX1BackgroundMobile from 'assets/home/mobile/image-earphones-yx1.jpg';
import earphoneYX1BackgroundTablet from 'assets/home/tablet/image-earphones-yx1.jpg';
import earphoneYX1BackgroundDesktop from 'assets/home/desktop/image-earphones-yx1.jpg';

import orangeBackgroundMobile from 'assets/home/mobile/orange-background.jpg';
import orangeBackgroundTablet from 'assets/home/tablet/orange-background.jpg';
import orangeBackgroundDesktop from 'assets/home/desktop/orange-background.jpg';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import { useSelector } from 'react-redux';


export default function Products() {

    const [orangeBackground, setOrangeBackground] = useState('');
    const [speakerZX7Background, setSpeakerZX7Background] = useState('');
    const [earphoneYX1Background, setEarphoneYX1Background] = useState('');

    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(currentBreakpoint === 'desktop') {
            setOrangeBackground(`url(${orangeBackgroundDesktop})`);
            setSpeakerZX7Background(`url(${speakerZX7BackgroundDesktop})`)
            setEarphoneYX1Background(earphoneYX1BackgroundDesktop)
        }
        else if(currentBreakpoint === 'tablet'){
            setOrangeBackground(`url(${orangeBackgroundTablet})`);
            setSpeakerZX7Background(`url(${speakerZX7BackgroundTablet})`)
            setEarphoneYX1Background(earphoneYX1BackgroundTablet)
        }
        else {
            setOrangeBackground(`url(${orangeBackgroundMobile})`);
            setSpeakerZX7Background(`url(${speakerZX7BackgroundMobile})`)
            setEarphoneYX1Background(earphoneYX1BackgroundMobile)
        }
    }, [currentBreakpoint]);

    return (
        <section className={`${styles.products} sub-container`}>
            <div style={{backgroundImage: orangeBackground}} className={styles.speakerZX9}>
                <div className={styles.img}>
                    <img src={speakerZX9Icon} alt="" />
                </div>
                <h1>ZX9 SPEAKER</h1>
                <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                <Button />
            </div>

            <div style={{backgroundImage: speakerZX7Background}} className={styles.speakerZX7}>
                <h4>ZX7 SPEAKER</h4>
                <Button />
            </div>

            <div className={styles.earphoneYX1}>
                <div className={styles.img}>
                    <img src={earphoneYX1Background} alt="" />
                </div>
                <div className={styles.more}>
                    <div>
                        <h4>YX1 EARPHONES</h4>
                        <Button />
                    </div>
                </div>
            </div>
        </section>
    );
}