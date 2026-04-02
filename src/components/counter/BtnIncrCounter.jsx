import { useAtom } from 'jotai';
import { counterAtom } from '../../atoms/counter.atom';

export default function BtnIncrCounter({ step = 1 }) {

    const [counter, setCounter] = useAtom(counterAtom);

    const handleIncr = () => {
        setCounter(counter => counter + step)
    };

    const handleDecr = () => {
        setCounter(counter => counter - step)
    }

    return (
        <div>
            <button onClick={handleIncr}>+ {step}</button>
            {' '}
            <button onClick={handleDecr}>- {step}</button>
        </div>
    )
}