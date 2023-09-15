import { useEffect, useState } from 'react';
import Input from './Input/input';
import styles from './checkout.module.scss';
import RadioInput from './RadioInput/radio-input';
import { useSelector } from 'react-redux';
import { useCartProducts } from 'store/slices/sliceCartProducts';
import SumaryProduct from './SumaryProduct/sumary-product';

export default function Checkout() {

    const cartProducts = useSelector(useCartProducts);

    const [data, setData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        zipCode: '',
        city: '',
        country: '',
        paymentMethod: '',
        eNumber: '',
        ePin: ''
    });

    useEffect(()=> {
        if(data.paymentMethod !== 'e-money') {
            setData((prev) => {
                const newData = {...prev, eNumber: '', ePin: ''}
                return newData;
            });
        }
    }, [data.paymentMethod]);

    function handleChange(object: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = object.target;
        setData((prev) => {
            const newData = {...prev, [name]: value}
            return newData;
        });
    }

    function handleSelectRadio(object: {name: string, value: string}) {
        const {name, value} = object;
        setData((prev) => {
            const newData = {...prev, [name]: value}
            return newData;
        });
    }

    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let sum = 0;
        cartProducts.forEach(item => {
            sum += item.product.price * item.quantity;
        });
        setTotalPrice(sum);
    }, [cartProducts]);


    return (
        <main className='container' style={{backgroundColor: '#F1F1F1'}}>
            <div className={`${styles.checkout} sub-container`}>
                <form className={styles.form}>
                    <h3>CHECKOUT</h3>
                    <div className={styles.formSubContainer}>
                        <span className='sub-title'>BILLING DETAILS</span>
                        <div className={styles.inputs}>
                            <Input 
                                label='Name'
                                name='name'
                                type='text'
                                value={data.name}
                                onChangingValue={handleChange}
                                />
                            <Input 
                                label='Email Address' 
                                name='email'
                                type='email'
                                value={data.email}
                                onChangingValue={handleChange}  
                                />
                            <Input 
                                label='Phone number' 
                                name='phoneNumber'
                                type='number'
                                value={data.phoneNumber}
                                onChangingValue={handleChange}   
                            />
                        </div>
                    </div>
                    <div className={styles.formSubContainer}>
                        <span className='sub-title'>SHIPPING INFO</span>
                        <div className={styles.inputs}>
                            <Input 
                                label='Your Address' 
                                name='address'
                                type='text'
                                value={data.address}
                                onChangingValue={handleChange}
                                />
                            <Input 
                                label='ZIP Code' 
                                name='zipCode'
                                type='number'
                                value={data.zipCode}
                                onChangingValue={handleChange}  
                                />
                            <Input 
                                label='City' 
                                name='city'
                                type='text'
                                value={data.city}
                                onChangingValue={handleChange}
                            />
                            <Input 
                                label='Country' 
                                name='country'
                                type='text'
                                value={data.country}
                                onChangingValue={handleChange}  
                            />
                        </div>
                    </div>
                    <div className={styles.formSubContainer}>
                        <span className='sub-title'>PAYMENT DETAILS</span>
                        <div className={styles.paymentMethod}>
                            <label htmlFor="paymentMethod">Payment Method</label>
                            <div className={styles.radioInputs}>
                                <RadioInput 
                                    currentSelectedValue={data.paymentMethod} 
                                    name='e-Money' 
                                    value='e-money' 
                                    onSelectingValue={(object) => handleSelectRadio(object)}
                                    />
                                <RadioInput 
                                    currentSelectedValue={data.paymentMethod} 
                                    name='Cash on Delivery' 
                                    value='cash' 
                                    onSelectingValue={(object) => handleSelectRadio(object)}
                                />
                            </div>
                        </div>
                    </div>
                    {data.paymentMethod === 'e-money' &&
                        <div className={styles.formSubContainer}>
                            <div className={styles.inputs}>
                                <Input 
                                    label='e-Money Number' 
                                    name='eNumber'
                                    type='number'
                                    value={data.eNumber}
                                    onChangingValue={handleChange}
                                />
                                <Input 
                                    label='e-Money PIN' 
                                    name='ePin'
                                    type='number'
                                    value={data.ePin}
                                    onChangingValue={handleChange}  
                                />
                            </div>
                        </div>
                    }
                </form>

                <div className={styles.summary}>
                    <h6>SUMMARY</h6>
                    <ul className={styles.products}>
                        {cartProducts.map(item => 
                            <SumaryProduct key={item.product.id} {...item}/>   
                        )}
                    </ul>
                    <ul className={styles.prices}>
                        <li>
                            <span>TOTAL</span>
                            <span>$ {totalPrice}</span>
                        </li>
                        <li>
                            <span>SHIPPING</span>
                            <span>$ 50</span>
                        </li>
                        <li className={styles.grandTotal}>
                            <span>GRAND TOTAL</span>
                            <span>$ {totalPrice + 50}</span>
                        </li>
                    </ul>
                    <button className={`${styles.submitButton} sub-title`}>CONTINUE & PAY</button>
                </div>
            </div>
        </main>
    );
}