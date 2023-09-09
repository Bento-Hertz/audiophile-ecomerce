import AboutUs from 'components/AboutUs/about-us';
import CategoryLinks from 'components/CategoryLinks/category-links';
import Product from 'components/Product/product';
import IProduct from 'interfaces/product';

interface Props {
    products: IProduct[];
}

export default function Earphones({products}: Props) {

    const filteredProducts = products.filter(product => product.category === 'earphones');
    
    return (
        <main className='container'>
            <section className='sub-container sub-container__gap'>
                {filteredProducts.map((product, index) => {
                    if(index%2 !== 0) 
                        return <Product swapColumns={true} key={product.id} product={product}/>
                    else
                        return <Product key={product.id} product={product}/>
                })}
            </section>
            <CategoryLinks />
            <AboutUs />
        </main>
    );
}