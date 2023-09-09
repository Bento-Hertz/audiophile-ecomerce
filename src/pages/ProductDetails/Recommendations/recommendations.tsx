import styles from './recommendations.module.scss';
import ProductLink from 'components/ProductLink/product-link';
import xx59ImageMobile from 'assets/shared/mobile/image-xx59-headphones.jpg';
import xx59ImageTablet from 'assets/shared/tablet/image-xx59-headphones.jpg';
import xx59ImageDesktop from 'assets/shared/desktop/image-xx59-headphones.jpg';
import xx99MarkOneImageMobile from 'assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import xx99MarkOneImageTablet from 'assets/shared/tablet/image-xx99-mark-one-headphones.jpg';
import xx99MarkOneImageDesktop from 'assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import zx9ImageMobile from 'assets/shared/mobile/image-zx9-speaker.jpg';
import zx9ImageTablet from 'assets/shared/tablet/image-zx9-speaker.jpg';
import zx9ImageDesktop from 'assets/shared/desktop/image-zx9-speaker.jpg';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export default function Recommendations() {

    const [xx59Image, setxx59Image] = useState('');
    const [xx99MarkOneImage, setxx99MarkOneImage] = useState('');
    const [zx9Image, setzx9Image] = useState('');
    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(currentBreakpoint === 'desktop') {
            setxx59Image(xx59ImageDesktop);
            setxx99MarkOneImage(xx99MarkOneImageDesktop);
            setzx9Image(zx9ImageDesktop);
        }
        else if(currentBreakpoint === 'tablet') {
            setxx59Image(xx59ImageTablet);
            setxx99MarkOneImage(xx99MarkOneImageTablet);
            setzx9Image(zx9ImageTablet);
        }
        else {
            setxx59Image(xx59ImageMobile);
            setxx99MarkOneImage(xx99MarkOneImageMobile);
            setzx9Image(zx9ImageMobile);
        }
    }, [currentBreakpoint]);


    return (
        <section className={`${styles.recommendations} sub-container`}>
            <h3>YOU MAY ALSO LIKE</h3>
            <ul>
                <li>
                    <img src={xx99MarkOneImage} alt="" />
                    <h5>XX99 MARK I HEADPHONES</h5>
                    <ProductLink path='/product/xx99-mark-one-headphones'/>
                </li>
                <li>
                    <img src={xx59Image} alt="" />
                    <h5>XX59 HEADPHONE</h5>
                    <ProductLink path='/product/xx59-headphones'/>
                </li>
                <li>
                    <img src={zx9Image} alt="" />
                    <h5>ZX9 SPEAKER</h5>
                    <ProductLink path='/product/zx9-speaker'/>
                </li>
            </ul>
        </section>
    );
}