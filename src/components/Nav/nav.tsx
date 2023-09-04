import styles from './nav.module.scss';
import logo from 'assets/audiophile.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
    isInFooter?: boolean;
}

export default function Nav({isInFooter = false}: Props) {

    return (
        <nav className={classNames({
            'sub-container': true,
            [styles.nav]: !isInFooter,
            [styles.footerNav]: isInFooter
        })}>
            {!isInFooter && 
                <i className={`${styles.menuBars} fa-solid fa-bars`} title='menu'></i>
            }

            <div className={styles.logo} >
                <img src={logo} alt="logo" />
            </div>

            <ul className={styles.links}>
                <li className='sub-title'>
                    <Link to=''>HOME</Link>
                </li>
                <li className='sub-title'>
                    <Link to=''>HEADPHONES</Link>
                </li>
                <li className='sub-title'>
                    <Link to=''>SPEAKERS</Link>
                </li>
                <li className='sub-title'>
                    <Link to=''>EARPHONES</Link>
                </li>
            </ul>

            {!isInFooter &&
                <i className={`${styles.cart} fa-solid fa-cart-shopping`} title='cart'></i>
            }
        </nav>
    );
}