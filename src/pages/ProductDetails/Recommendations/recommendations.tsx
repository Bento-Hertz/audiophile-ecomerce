import styles from './recommendations.module.scss';
import ProductLink from 'components/ProductLink/product-link';

export default function Recommendations() {

    let product = [
        {
            name: 'XX99 MARK I'
        }
    ]

    return (
        <section className={`${styles.recommendations} sub-container`}>
            <h3>YOU MAY ALSO LIKE</h3>
            <ul>
                <li>
                    <img src='' alt="" />
                    <h5>XX99 </h5>
                    <ProductLink path=''/>
                </li>
            </ul>
        </section>
    );
}