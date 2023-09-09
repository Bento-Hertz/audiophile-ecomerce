import Nav from 'components/Nav/nav';
import styles from './sidebar.module.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { changeSidebarState, useSidebarState } from 'store/slices/sliceSidebarState';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Sidebar() {

    const isSidebarClosed = useSelector(useSidebarState);
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect(() => {
        dispatch(changeSidebarState(true));
    }, [location, dispatch]);

    return (
        <div className={classNames({
            [styles.sidebar]: true,
            [styles.sidebar__closed]: isSidebarClosed
        })}>
            <div className={styles.closeSidebar}>
                <button type='button' onClick={() => dispatch(changeSidebarState(true))}>
                    <i className="fa-solid fa-xmark" title='close sidebar'></i>
                </button>
            </div>

            <Nav isInSidebar/>

            <div onClick={() => dispatch(changeSidebarState(true))} className={classNames({
                [styles.closeArea]: true,
                [styles.closeArea__closed]: isSidebarClosed
            })}></div>
        </div>
    );
}

