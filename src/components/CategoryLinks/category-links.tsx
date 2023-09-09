import { Link } from 'react-router-dom';
import styles from './category-links.module.scss';
import headphoneIcon from 'assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakerIcon from 'assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphoneIcon from 'assets/shared/desktop/image-category-thumbnail-earphones.png';

export default function CategoryLinks() {
    return (
        <section className={`${styles.categoryLinks} sub-container`}>
            <ul>
                <li>
                    <Link className={styles.link} to='/headphones'>
                        <img className={styles.categoryIcon} src={headphoneIcon} alt="" />
                        <h6>HEADPHONES</h6>
                        <div>
                            <span className='sub-title'>SHOP</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to='/speakers'>
                        <img className={styles.categoryIcon} src={speakerIcon} alt="" />
                        <h6>SPEAKERS</h6>
                        <div>
                            <span className='sub-title'>SHOP</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to='/earphones'>
                        <img className={styles.categoryIcon} src={earphoneIcon} alt="" />
                        <h6>EARPHONES</h6>
                        <div>
                            <span className='sub-title'>SHOP</span>
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </Link>
                </li>
            </ul>
        </section>
    );
}