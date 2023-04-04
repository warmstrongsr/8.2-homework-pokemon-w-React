import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './views/ToDo';


export default function App() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <ToDo />
            </div>
        </>
    )
}
