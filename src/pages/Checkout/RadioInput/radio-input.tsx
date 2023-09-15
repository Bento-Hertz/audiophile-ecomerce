import classNames from 'classnames';
import styles from './radio-input.module.scss';

interface Props {
    name: string;
    value: string;
    onSelectingValue: (value: {value: string, name: string}) => void;
    currentSelectedValue: string;
}

export default function RadioInput({name, value, onSelectingValue, currentSelectedValue}: Props) {

    const isSelected = value === currentSelectedValue;

    return (
        <div 
            className={classNames({
                [styles.radioInput]: true,
                [styles.radioInput__selected]: isSelected
            })} 
            onClick={() => onSelectingValue({value: value, name: 'paymentMethod'})}
        >
            <input type="radio" name='paymentMethod' value={value} checked={isSelected}/>
            {name}
        </div>
    );
}