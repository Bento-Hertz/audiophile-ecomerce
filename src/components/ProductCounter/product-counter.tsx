import classNames from 'classnames';
import styles from './product-counter.module.scss';

interface Props {
    counter: number;
    onChangingCounter: (counter: number) => void;
    isInCart?: boolean;
}

export default function ProductCounter({counter, onChangingCounter, isInCart=false}: Props) {

    function handleCounter(n: number) {
        if(counter + n === 0) {
            onChangingCounter(1);
        }
        else {
            onChangingCounter(counter + n);
        }
    }
    
    return (
        <div className={classNames({
            [styles.quantity]: true,
            [styles.quantity__small]: isInCart
        })}>
            <button type='button' className={styles.counterButton} onClick={() => handleCounter(-1)}>-</button>
            <div>{counter}</div>
            <button type='button' className={styles.counterButton} onClick={() => handleCounter(1)}>+</button>
        </div>
    );
}