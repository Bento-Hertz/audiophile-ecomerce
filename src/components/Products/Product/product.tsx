import IProduct from 'interfaces/product';
import styles from './product.module.scss';
import Button from 'components/Button/button';
import { useSelector } from 'react-redux';
import { useCurrentBreakpoint } from 'store/slices/sliceCurrentBreakpoint';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

interface Props {
    product: IProduct;
    swapColumns?: boolean;
}

export default function Product({product, swapColumns=false}: Props) {

    const {name, description, categoryImage} = product;

    const [productImage, setProductImage] = useState('');
    const currentBreakpoint = useSelector(useCurrentBreakpoint);
    useEffect(() => {
        if(currentBreakpoint === 'desktop')
            setProductImage(categoryImage.desktop);
        else if(currentBreakpoint === 'tablet')
            setProductImage(categoryImage.tablet);
        else
            setProductImage(categoryImage.mobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentBreakpoint]);

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
                <Button />
            </div>
        </article>
    );
}