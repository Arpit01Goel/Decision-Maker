import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Left() {
    return (
        <div className='w-32 bg-gray-600 text-stone-200 text-sm flex flex-row fixed left-0 top-7 bottom-7 ' style={{height: '100%'}}>
            <ul className="p-4" >
                Left is here
                {/* <li>first cell</li>
                <li> second cell</li>
                <li>
                    third cell
                </li> */}
            </ul>
        </div>
    )
}