import styles from './nav.module.scss';
import logo from 'assets/audiophile.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import menuIcon from 'assets/shared/tablet/icon-hamburger.svg';
import { useDispatch } from 'react-redux';
import { changeSidebarState } from 'store/slices/sliceSidebarState';

interface Props {
    isInFooter?: boolean;
    isInSidebar?: boolean;
}

export default function Nav({isInFooter = false, isInSidebar = false}: Props) {

    const dispatch = useDispatch();

    return (
        <nav className={classNames({
            [styles.nav]: !isInFooter && !isInSidebar,
            [styles.footerNav]: isInFooter,
            [styles.sidebarNav]: isInSidebar,
            'sub-container': true
        })}>
            {(!isInFooter && !isInSidebar) && 
                <button className={styles.menuBars} onClick={() => dispatch(changeSidebarState(false))}>
                    <img src={menuIcon} alt='menu'></img>
                </button>
            }

            {!isInSidebar && 
                <Link to='/' className={styles.logo} >
                    <img src={logo} alt="logo" />
                </Link>      
            }

            <ul className={styles.links}>
                <li className='sub-title'>
                    <Link to='/'>HOME</Link>
                </li>
                <li className='sub-title'>
                    <Link to='/headphones'>HEADPHONES</Link>
                </li>
                <li className='sub-title'>
                    <Link to='/speakers'>SPEAKERS</Link>
                </li>
                <li className='sub-title'>
                    <Link to='/earphones'>EARPHONES</Link>
                </li>
            </ul>

            {(!isInFooter && !isInSidebar) &&
                <i className={`${styles.cart} fa-solid fa-cart-shopping`} title='cart'></i>
            }
        </nav>
    );
}