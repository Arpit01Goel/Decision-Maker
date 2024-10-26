import React from "react";
import Pad from './Writing_pad'

export default function Selection(props) {
    return (
        <div className='flex flex-col min-w-72 mx-4 h-[100%] ' >

                <p className='text-center text-base sticky top-7 z-10 bg-pink-400' > {props.name} </p>
                <Pad />
            </div>
    )
}