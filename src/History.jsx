import React from 'react';
import { getDateFromStamp, timeAgo } from './helper';

const History = ({history}) => {
    return (
        <div className='border'>
            <div className='text-2xl text-center font-bold p-3'>History</div>
            <ul className='px-2 '>
                {
                    history.map(
                        (h, i) =>{
                            return <li key={i} className='relative'>
                                {h.name} 
                            <span className='absolute text-gray-500 right-0 text-sm'>{timeAgo(h.timestamp,1)}</span>
                            </li>
                        }
                    )
                }
            </ul>
        </div>
    );
}

export default History;
