import React from 'react'
import ReactDOM from 'react-dom/client'
import Section from './Section'
export default function Main() {
    return (
        <div className='flex flex-row justify-between text-xs bg-blue-100  ' >
            <Section name='Advantage' />
            <Section name='Disadvantage' />
        </div>
    )
}