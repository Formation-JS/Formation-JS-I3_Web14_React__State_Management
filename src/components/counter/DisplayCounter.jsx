import { useAtom, useAtomValue } from 'jotai'
import { counterAtom } from '../../atoms/counter.atom'

export default function DisplayCounter() {

    // const [counter, setCounter] = useAtom(counterAtom);
    const counter = useAtomValue(counterAtom);

    return (
        <>
            <p>Compteur : {counter}</p>
        </>
    )
}