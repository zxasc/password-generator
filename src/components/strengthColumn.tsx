import { useSelector } from 'react-redux';
import { selectGenerator } from './generatorSlice';

export default function StrengthColumn({ empty }) {
    const entropy = useSelector(selectGenerator).entropy;
    let className = "strengthColumn";
    if(empty === true) {
        className = "strengthColumn";
    } else if(entropy >= 95) {
        className = "strengthColumn strong"
    } else if (entropy >= 65) {
        className = "strengthColumn med"
    } else if (entropy >= 30) {
        className = "strengthColumn weak"
    } else {
        className = "strengthColumn vweak"
    }

    return(
        <div className={className}></div>
    )

}