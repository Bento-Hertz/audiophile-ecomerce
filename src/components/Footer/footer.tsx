import Nav from 'components/Nav/nav';
import styles from './footer.module.scss';
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
                        <a className={styles.link} href='typescript:void(0)'>
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href='typescript:void(0)'>
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href='typescript:void(0)'>
                            <img src={instagramIcon} alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}