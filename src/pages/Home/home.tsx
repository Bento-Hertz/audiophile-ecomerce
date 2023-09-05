import styles from './home.module.scss';
import CategoryLinks from 'components/CategoryLinks/category-links';
import TrendingProducts from './TrendingProducts/trending-products';
import AboutUs from 'components/AboutUs/about-us';

export default function Home() {
    return (
        <main className={`${styles.home} container`}>
            <CategoryLinks />
            <TrendingProducts />
            <AboutUs />
        </main>
    );
}