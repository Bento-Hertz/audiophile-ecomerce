import ICartProduct from 'interfaces/ICartProduct';
import styles from './sumary-product.module.scss';

export default function SumaryProduct({product, quantity}: ICartProduct) {
    return (
        <li className={styles.li}>
            <div className={styles.product}>
                <div className={styles.img} style={{backgroundImage: `url(${product.categoryImage.mobile})`}}/>
                <div className={styles.about}>
                    <span className={styles.name}>{product.name}</span>
                    <span>$ {product.price}</span>
                </div>
            </div>
            <span className={styles.quantity}>x{quantity}</span>
        </li>
    );
}