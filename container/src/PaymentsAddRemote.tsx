import { useEffect, useRef } from 'react';
import mount from 'paymentsadd/PaymentsAdd';


const PaymentsAddRemote = (): JSX.Element => {

    const paymentsAddDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(paymentsAddDiv.current)
    }, [])

    return (<div ref={paymentsAddDiv}></div>)
}

export default PaymentsAddRemote;

