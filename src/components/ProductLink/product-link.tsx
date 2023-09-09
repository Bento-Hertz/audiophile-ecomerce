import { Link } from 'react-router-dom';
import styles from './product-link.module.scss';

interface Props {
    path: string;
}

export default function ProductLink({path}: Props) {
    return (
        <Link to={path} className={`${styles.link} sub-title`}>SEE PRODUCT</Link>
    );
}