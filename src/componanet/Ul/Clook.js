import React, { useEffect, useState } from 'react';

const Clook = () => {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;
    const coundDown = () => {
        const destination = new Date('Dec 29, 2023').getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const defferent = destination - now
            const days = Math.floor(defferent / (1000 * 60 * 60 * 24))
            const hours = Math.floor(defferent % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor(defferent % (1000 * 60 * 60) / (1000 * 60))
            const seconds = Math.floor(defferent % (1000 * 60) / 1000)

            if (destination < 0) clearInterval(interval.current)
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
    }
    useEffect(() => {
        coundDown()
    })

    return (
        <div className="clook_wrapper d-flex aling-items-center gap-3">
            <div className="clook_date d-flex aling-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{days}</h1>
                    <h5 className='text-white fs-6'>Days</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className="clook_date d-flex aling-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{hours}</h1>
                    <h5 className='text-white fs-6'>Hours</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className="clook_date d-flex aling-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{minutes}</h1>
                    <h5 className='text-white fs-6'>Minutes</h5>
                </div>
                <span className='text-white fs-3'>:</span>
            </div>
            <div className="clook_date d-flex aling-items-center gap-3">
                <div className='text-center'>
                    <h1 className='text-white fs-4 mb-2'>{seconds}</h1>
                    <h5 className='text-white fs-6'>Seconds</h5>
                </div>
            </div>
        </div>
    );
};

export default Clook;