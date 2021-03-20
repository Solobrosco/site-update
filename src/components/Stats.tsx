import React, {useEffect, useState} from 'react';

import stats from '../data/stats.json'

interface StatsProps {
    stats: {}
}

function startToNow (date?: any) {
    let msDay = 24 * 60 * 60 * 1000;
    let today = new Date();
    date = Date.parse(date);
    let start = new Date(date);
    let days = Math.round((today.getTime() - start.getTime()) / msDay); 
    return days;
}

const Stats = (props: StatsProps) => {
    const [count, setCount] = useState(stats.Updating.default);
    
    useState(() => {
        const num = localStorage.getItem("counter");
        if(num){
            setCount(JSON.parse(num));
        };
    }); 
    
    useEffect(() => {
        localStorage.setItem("counter", JSON.stringify(count));
    });

    console.log(props)
    
    return(
        <div className='text-center text-gruvwhite bg-gruvbg-1'>
            <div className='text-3xl font-black'>Stats</div>
            <div className='flex space-x-3 justify-center pb-3'>
                <div className='text-2xl font-bold p-5 bg-green-700 rounded'>  
                    {props.stats["Start to Present"].title} {startToNow(stats["Start to Present"].start)}
                </div>
                <div className='select-none text-2xl font-bold p-5 cursor-pointer bg-redgruv rounded' onClick={() => setCount(count + 1)}>
                    <div>
                        {stats.Updating.title} {count}
                    </div>
                </div>
                <div className='text-2xl font-bold p-5 cursor-pointer bg-blue-800 rounded'>
                    <div>
                        {stats.Amazon.title} {stats.Amazon.rate}
                    </div>
                </div>
                <div className='text-2xl font-bold p-5 cursor-pointer bg-orangegruv rounded'>
                    <div>
                        {stats.Instacart.title} {stats.Instacart.default} Stars
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;