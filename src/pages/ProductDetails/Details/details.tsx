import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import styles from './details.module.scss';
import IProduct from 'interfaces/product';

export default function Details(product: IProduct) {
    
    const [productImage, setProductImage] = useState('');
    const [firstImage, setFirstImage] = useState('');
    const [secondImage, setSecondImage] = useState('');
    const [thirdImage, setThirdImage] = useState('');
    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(product) {
            if(currentBreakpoint === 'desktop') {
                setProductImage(product.image.desktop);
                setFirstImage(product.gallery.first.desktop);
                setSecondImage(product.gallery.second.desktop);
                setThirdImage(product.gallery.third.desktop);
            }
            else if(currentBreakpoint === 'tablet') {
                setProductImage(product.image.tablet);
                setFirstImage(product.gallery.first.tablet);
                setSecondImage(product.gallery.second.tablet);
                setThirdImage(product.gallery.third.tablet);
            }
            else {
                setProductImage(product.image.mobile);
                setFirstImage(product.gallery.first.mobile);
                setSecondImage(product.gallery.second.mobile);
                setThirdImage(product.gallery.third.mobile);
            }
        }

    }, [currentBreakpoint, product]);

    return (
        <>
            <section className={`${styles.product} sub-container`}>
                <div className={styles.img}>
                    <img src={productImage} alt="" />
                </div>
                <div className={styles.info}>
                    <div className={styles.titleContainer}>
                        {product.new && 
                            <span className={`${styles.newProduct} overline`}>NEW PRODUCT</span>
                        }
                        <h2>{product.name}</h2>
                    </div>
                    <p>{product.description}</p>
                    <span className={styles.price}>$ {product.price}</span>
                    <div className={styles.addToCart}>
                        <div className={styles.quantity}>
                            <button type='button' className={styles.counterButton}>-</button>
                            <div>1</div>
                            <button type='button' className={styles.counterButton}>+</button>
                        </div>
                        <button className={styles.addButton}>ADD TO CART</button>
                    </div>
                </div>
            </section>

            <section className={`${styles.more} sub-container`}>
                <div className={styles.features}>
                    <h3>FEATURES</h3>
                    <p>{product.features}</p>
                </div>
                <div className={styles.box}>
                    <h3>IN THE BOX</h3>
                    <ul>
                        {product.includes.map(content => (
                            <li>
                                <span className={styles.quantity}>{content.quantity}x</span>
                                <span className={styles.item}>{content.item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            
            <section className={`${styles.gallery} sub-container`}>
                <div className={styles.secondaryImages}>
                    <img src={firstImage} alt="" />
                    <img src={secondImage} alt="" />
                </div>
                <img className={styles.mainImage} src={thirdImage} alt="" />
            </section>
        </>
    );
}