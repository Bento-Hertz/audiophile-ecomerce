import Products from 'components/Products/products';
import styles from './headphones.module.scss';
import IProduct from 'interfaces/product';

interface Props {
    products: IProduct[];
}

export default function Headphones({products}: Props) {

    const filteredProducts = products.filter(product => product.category === 'headphones');
    
    return (
        <main className={`${styles.headphones} container`}>
            <Products filteredProducts={filteredProducts}/>
        </main>
    );
}