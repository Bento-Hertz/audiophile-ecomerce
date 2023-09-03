import styles from './new-product.module.scss';

export default function NewProduct() {
    return (
        <article className={styles.newProduct}>
            <div className={styles.container}>
                <span className='overline'>NEW PRODUCT</span>
                <h1>XX99 MARK II HEADPHONES</h1>
                <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                <button className={`${styles.button} sub-title`}>SEE PRODUCT</button>
            </div>
        </article>
    );
}