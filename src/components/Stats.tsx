import React, { useState } from 'react';

import stats from '../data/stats.json'

interface StatsProps {
    stats?: any
}

function startToNow (date?: any) {
    let msDay = 24 * 60 * 60 * 1000;
    let today = new Date();
    date = Date.parse(date);
    let start = new Date(date);
    let days = Math.round((today.getTime() - start.getTime()) / msDay);
    return days;
}

const Stats = () => {
    const [count, setCount] = React.useState(stats.Updating.default);

    React.useState(() => {
        const num = localStorage.getItem("counter");
        if(num){
            setCount(JSON.parse(num));
        };
    }); 

    React.useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count));
    });

    return(
        <div className='text-center text-gruvwhite bg-gruvbg-1'>
            <div className='text-3xl font-black'>Stats</div>
            <div className='flex justify-center'>
                <div className='text-2xl font-bold px-5'>
                    {stats["Start to Present"].title}
                    <span>  </span>
                    {startToNow(stats["Start to Present"].start)}
                </div>
                <div className='text-2xl font-bold px-5 cursor-pointer'>
                    <div onClick={() => setCount(count + 1)}>
                        Times Clicked {count}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;