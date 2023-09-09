import IProduct from 'interfaces/product';
import styles from './product.module.scss';
import { useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import ProductLink from 'components/ProductLink/product-link';

interface Props {
    product: IProduct;
    swapColumns?: boolean;
}

export default function Product({product, swapColumns=false}: Props) {

    const {slug, name, description, categoryImage} = product;

    const [productImage, setProductImage] = useState('');
    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(currentBreakpoint === 'desktop')
            setProductImage(categoryImage.desktop);
        else if(currentBreakpoint === 'tablet')
            setProductImage(categoryImage.tablet);
        else
            setProductImage(categoryImage.mobile);
    }, [currentBreakpoint, categoryImage]);

    return(
        <article className={classNames({
            [styles.product]: true,
            [styles.product__swapColumns]: swapColumns
        })}>
            <div className={styles.img}>
                <img src={productImage} alt="" />
            </div>
            <div className={styles.details}>
                <h2>{name}</h2>
                <p>{description}</p>
                <ProductLink path={`/product/${slug}`}/>
            </div>
        </article>
    );
}