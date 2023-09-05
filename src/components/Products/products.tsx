import AboutUs from 'components/AboutUs/about-us';
import CategoryLinks from 'components/CategoryLinks/category-links';
import styles from './products.module.scss';
import Product from './Product/product';
import IProduct from 'interfaces/product';

interface Props {
    filteredProducts: IProduct[];
}

export default function Products({filteredProducts}: Props) {

    return (
        <section className={`${styles.products} sub-container`}>
            {filteredProducts.map((product, index) => {
                if(index%2 !== 0) 
                    return <Product swapColumns={true} key={product.id} product={product}/>
                else
                    return <Product key={product.id} product={product}/>
            })}
            <CategoryLinks />
            <AboutUs />
        </section>
    );
}