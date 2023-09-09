import CategoryLinks from 'components/CategoryLinks/category-links';
import TrendingProducts from './TrendingProducts/trending-products';
import AboutUs from 'components/AboutUs/about-us';

export default function Home() {
    return (
        <main className='container'>
            <CategoryLinks />
            <TrendingProducts />
            <AboutUs />
        </main>
    );
}