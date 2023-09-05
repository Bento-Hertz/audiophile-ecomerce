import Products from 'components/Products/products';
import IProduct from 'interfaces/product';

interface Props {
    products: IProduct[];
}

export default function Headphones({products}: Props) {

    const filteredProducts = products.filter(product => product.category === 'headphones');
    
    return (
        <main className='container'>
            <Products filteredProducts={filteredProducts}/>
        </main>
    );
}