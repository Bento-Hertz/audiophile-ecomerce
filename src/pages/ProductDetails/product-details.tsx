import CategoryLinks from 'components/CategoryLinks/category-links';
import AboutUs from 'components/AboutUs/about-us';
import IProduct from 'interfaces/product';
import { useParams } from 'react-router-dom';
import Details from './Details/details';
import Recommendations from './Recommendations/recommendations';

interface Props {
    products: IProduct[];
}

export function ProductDetails({products}: Props) {

    const { slug } = useParams();
    const product = products.find(product => product.slug === slug);

    if(!product)
        return <p>nao encontrado</p>
    return (
        <main className='container'>
            <Details {...product}/>
            <Recommendations />
            <CategoryLinks />
            <AboutUs />
        </main>
    );
}