import { useSetAtom } from 'jotai';
import { counterAtom } from '../../atoms/counter.atom';

export default function BtnResetCounter() {

    // const [counter, setCounter] = useAtom(counterAtom);
    const setCounter = useSetAtom(counterAtom);

    const handleReset = () => {
        setCounter(0);
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}