import React, { useEffect } from 'react';
import './PreLoader.css';
import { preLoaderAnim } from '../animations';
const PreLoader = () => {

    useEffect(() =>{
        preLoaderAnim()
    },[])

    return (
        <div className = "preloader">
            <div className='texts-container'>
                <span>Create,</span>
                <span>Break,</span>
                <span>Innovate.</span>
            </div>
        </div>
    )
}

export default PreLoader