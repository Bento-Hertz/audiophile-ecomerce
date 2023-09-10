import styles from './nav.module.scss';
import logo from 'assets/audiophile.svg';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import menuIcon from 'assets/shared/tablet/icon-hamburger.svg';
import cartIcon from 'assets/shared/desktop/icon-cart.svg';
import activeCartIcon from 'assets/shared/desktop/icon-active-cart.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarState } from 'store/slices/sliceSidebarState';
import { changeCartState, useCartState } from 'store/slices/sliceCartState';
import { useState } from 'react';
import Cart from './Cart/cart';

interface Props {
    isInFooter?: boolean;
    isInSidebar?: boolean;
}

export default function Nav({isInFooter = false, isInSidebar = false}: Props) {

    const isCartClosed = useSelector(useCartState);
    const dispatch = useDispatch();

    function handleSidebarState() {
        dispatch(changeSidebarState(false));
        dispatch(changeCartState(true));
    }

    const [currentCartIcon, setCurrentCartIcon] = useState(cartIcon);
    function changeCartImage(state: string) {
        if(state === 'active')
            setCurrentCartIcon(activeCartIcon);
        else if(state === 'inactive')
            setCurrentCartIcon(cartIcon);
    }

    return (
        <nav className={classNames({
            [styles.nav]: !isInFooter && !isInSidebar,
            [styles.footerNav]: isInFooter,
            [styles.sidebarNav]: isInSidebar,
            'sub-container': true
        })}>
            {(!isInFooter && !isInSidebar) && 
                <button className={styles.menuBars} onClick={handleSidebarState}>
                    <img src={menuIcon} alt='menu'/>
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
                <button 
                    type='button' 
                    className={styles.cart} 
                    onClick={() => dispatch(changeCartState(!isCartClosed))}
                    onMouseOver={() => changeCartImage('active')}
                    onMouseOut={() => changeCartImage('inactive')}
                >
                    {isCartClosed ? 
                        <img src={currentCartIcon} alt="cart" />
                    :
                        <img src={activeCartIcon} alt="cart" />
                    }
                </button>
            }

            {(!isInFooter && !isInSidebar) &&
                <Cart />
            }
        </nav>
    );
}