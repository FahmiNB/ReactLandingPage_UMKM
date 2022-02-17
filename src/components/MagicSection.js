import React from 'react'
import '../App.css';
import {Button} from './Button'
import './MagicSection.css'

function MagicSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1 style={{backgroundColor: "black"}}>Pusat Kuliner & UMKM Pratistha Harsa</h1>
            <p style={{backgroundColor: "black"}}>Selamat Datang</p>
        </div>
    )
}

export default MagicSection
