import styles from './input.module.scss';

interface Props {
    label: string;
    name: string;
    type: string;
    value: string;
    onChangingValue: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({label, name, type, value, onChangingValue}: Props) {
    return (
        <div className={styles.input}>
            <label htmlFor={name}>
                {label}
            </label>
            <input 
                name={name} 
                type={type}
                value={value}    
                onChange={(event) => onChangingValue(event)}
            />
        </div>
    );
}