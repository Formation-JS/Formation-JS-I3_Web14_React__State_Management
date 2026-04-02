import { useAtom } from 'jotai';
import { counterAtom } from '../../atoms/counter.atom';

export default function BtnIncrCounter() {

    const [counter, setCounter] = useAtom(counterAtom);

    const handleIncr = () => {
        setCounter(counter => counter + 1)
    };

    const handleDecr = () => {
        setCounter(counter => counter - 1)
    }

    return (
        <div>
            <button onClick={handleIncr}>+1</button>
            {' '}
            <button onClick={handleDecr}>-1</button>
        </div>
    )
}