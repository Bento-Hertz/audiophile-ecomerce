import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import styles from './details.module.scss';
import IProduct from 'interfaces/product';
import ProductCounter from 'components/ProductCounter/product-counter';
import { addProductToCart, changeProductQuantity, useCartProducts } from 'store/slices/sliceCartProducts';
import { useLocation, useNavigate } from 'react-router-dom';
import Alert from './Alert/alert';
import GoBackButton from 'components/GoBackButton/go-back-button';

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

    const [productCounter, setProductCounter] = useState(1);
    const location = useLocation();
    useEffect(() => { 
        setProductCounter(1);
    }, [location]);

    const dispatch = useDispatch();
    const cartProducts = useSelector(useCartProducts);
    const [activeAlert, setActiveAlert] = useState(false);
    function onAddingToCart() {
        const cartProduct = cartProducts.find(item => item.product.id === product.id);
        if(cartProduct)
            dispatch(changeProductQuantity({id: product.id, counter: cartProduct.quantity + productCounter}));
        else
            dispatch(addProductToCart({product: product, quantity: productCounter}));

        setActiveAlert(true);
        setTimeout(() => {
            setActiveAlert(false);
        }, 5000);
    }

    const navigate = useNavigate();

    return (
        <>
            <section className={`${styles.product} sub-container`}>
                <GoBackButton />
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
                        <ProductCounter counter={productCounter} onChangingCounter={(counter) => setProductCounter(counter)}/>
                        <button className={styles.addButton} onClick={onAddingToCart}>ADD TO CART</button>
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
                            <li key={content.item}>
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

            <Alert activeAlert={activeAlert} onClosingAlert={() => setActiveAlert(false)}/>
        </>
    );
}