import CategoryLinks from 'components/CategoryLinks/category-links';
import styles from './home.module.scss';

export default function Home() {
    return (
        <main className={`container`}>
            <CategoryLinks />
        </main>
    );
}