import styles from './nav.module.scss';
import logo from 'assets/audiophile.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <i className={`${styles.menuBars} fa-solid fa-bars`} title='menu'></i>

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

            <i className={`${styles.cart} fa-solid fa-cart-shopping`} title='cart'></i>
        </nav>
    );
}