import styles from './new-product.module.scss';
import ProductLink from 'components/ProductLink/product-link';

export default function NewProduct() {
    return (
        <article className={styles.newProduct}>
            <div className={styles.description}>
                <span className='overline'>NEW PRODUCT</span>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <ProductLink path='/product/xx99-mark-two-headphones'/>
            </div>
        </article>
    );
}