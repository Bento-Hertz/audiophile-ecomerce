import styles from './cart-product.module.scss';
import ProductCounter from 'components/ProductCounter/product-counter';
import { useDispatch } from 'react-redux';
import { changeProductQuantity, removeProductFromCart } from 'store/slices/sliceCartProducts';
import binIcon from 'assets/shared/tablet/icon-bin.svg';
import ICartProduct from 'interfaces/ICartProduct';

export default function CartProduct({product, quantity}: ICartProduct) {

    const dispatch = useDispatch();

    return (
        <li className={styles.product} key={product.id}>
            <div className={styles.productInfo}>
                <div className={styles.image} style={{backgroundImage: `url(${product.categoryImage.mobile})`}}/>
                <div className={styles.info}>
                    <span className={styles.name}>{product.name}</span>
                    <span>$ {product.price}</span>
                </div>
            </div>
            <div className={styles.productEdit}>
                <ProductCounter isInCart counter={quantity} onChangingCounter={(counter) => dispatch(changeProductQuantity({id: product.id, counter: counter}))}/>
                <button onClick={() => dispatch(removeProductFromCart(product.id))}>
                    <img src={binIcon} alt="remove" />
                </button>
            </div>
        </li>
    );
}