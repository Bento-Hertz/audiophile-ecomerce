import { Link, useLocation } from 'react-router-dom';
import styles from './cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeCartState, useCartState } from 'store/slices/sliceCartState';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { removeAllProductsFromCart, useCartProducts } from 'store/slices/sliceCartProducts';
import CartProduct from './CartProduct/cart-product';

export default function Cart() {

    const isCartClosed = useSelector(useCartState);
    const dispatch = useDispatch();

    const location = useLocation();
    useEffect(() => {
        dispatch(changeCartState(true));
    }, [location, dispatch]);

    const [isAtThetopOfPage, setIsAtThetopOfPage] = useState(true);
    function handleScroll() {
        if(window.scrollY > 0) {
            setIsAtThetopOfPage(false);
        }
        else {
            setIsAtThetopOfPage(true);
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
    }, []);

    const cartProducts = useSelector(useCartProducts);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let sum = 0;
        cartProducts.forEach(item => {
            sum += item.product.price * item.quantity;
        });
        setTotalPrice(sum);
    }, [cartProducts]);

    return (
        <>
            <div className={classNames({
                [styles.cart]: true,
                [styles.cart__closed]: isCartClosed
            })}>
                <div className={styles.header}>
                    <h6>Cart ({cartProducts.length})</h6>
                    <button type='button' onClick={() => dispatch(removeAllProductsFromCart(0))}>Remove all</button>
                </div>
                {cartProducts.length > 0 ? 
                    <ul className={styles.cartProducts}>
                        {cartProducts.map(item => 
                            <CartProduct key={item.product.id} product={item.product} quantity={item.quantity}/>
                        )}
                    </ul>
                :
                    <span>Your cart is empty</span>
                }
                <div className={styles.total}>
                    <span>TOTAL</span>
                    <span className={styles.price}>$ {totalPrice}</span>
                </div>
                {cartProducts.length > 0 &&
                    <Link className={`${styles.checkout} sub-title`} to='/checkout'>CHECKOUT</Link>
                }
            </div>

            <div className={classNames({
                [styles.closeArea]: true,
                [styles.closeArea__closed]: isCartClosed,
                [styles.closeArea__fullHeight]: !isAtThetopOfPage
            })} onClick={() => dispatch(changeCartState(true))}/>
        </>
    )
}