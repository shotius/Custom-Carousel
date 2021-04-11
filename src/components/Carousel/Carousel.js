import React, { useRef } from 'react'
import Slides from '../Slides'
import styles from './Carousel.module.css'

export const Carousel = ({children}) => {
    const slidesRef = useRef(null)

    const goLeft = () => {
        slidesRef.current.style.transform = `translateX(100%)`
    }
    
    const goRight = () => {
        slidesRef.current.style.transform = `translateX(-100%)`
    }

    return (
        <>
            <div>
                <div className="slide-container">
                    <Slides
                        slides={children}
                        slidesRef={slidesRef}
                    />
                </div>
                <button className={styles.leftArrow} onClick={goLeft} >left</button>
                <button className={styles.rightArrow} onClick={goRight}>right</button>
            </div>
        </>
    )
} 