import { useEffect, useRef } from 'react';
import mount from 'paymentslist/PaymentsList';


const PaymentsListRemote = (): JSX.Element => {

    const paymentsListDiv = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        mount(paymentsListDiv.current)
    }, [])

    return (<div ref={paymentsListDiv}></div>)
}

export default PaymentsListRemote;

