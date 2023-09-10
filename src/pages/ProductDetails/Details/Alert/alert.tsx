import styles from './alert.module.scss';
import classNames from 'classnames';

interface Props {
    activeAlert: boolean;
    onClosingAlert: () => void;
}

export default function Alert({activeAlert, onClosingAlert}: Props) {

    return (
        <div className={classNames({
            [styles.modalMessage]: true,
            [styles.modalMessage__active]: activeAlert
        })}>
            <span>The product was successfully added to your cart.</span>
            <button className={styles.closeButton} type='button' onClick={onClosingAlert}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );  
}