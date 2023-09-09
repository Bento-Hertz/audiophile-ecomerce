import Nav from 'components/Nav/nav';
import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import facebookIcon from 'assets/shared/desktop/icon-facebook.svg';
import twitterIcon from 'assets/shared/desktop/icon-twitter.svg';
import instagramIcon from 'assets/shared/desktop/icon-instagram.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Nav isInFooter/>
            <div className={`${styles.details} sub-container`}>
                <div className={styles.text}>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <span>Copyright 2023. All Rights Reserved.</span>
                </div>
                <ul className={styles.social}>
                    <li>
                        <Link className={styles.link} to=''>
                            <img src={facebookIcon} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} to=''>
                            <img src={twitterIcon} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link} to=''>
                            <img src={instagramIcon} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}