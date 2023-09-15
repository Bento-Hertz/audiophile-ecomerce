import { useNavigate } from 'react-router-dom';
import styles from './go-back-button.module.scss';

export default function GoBackButton() {

    const navigate = useNavigate();

    return (
        <button className={styles.goBackButton} onClick={() => navigate(-1)}>{'< Go Back'}</button>
    );
}