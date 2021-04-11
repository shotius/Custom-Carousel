import React, { memo} from 'react'
import Slide from '../Slide'
import styles from  './Slides.module.css'

export const Slides = (props) => {
   
    const {slides} = props
    
    return (
        <div>
            <ul
                ref={props.slidesRef}
                className={styles.slides}
                >
                {slides.map((item, index) => (
                    <Slide item={item} key={index}/>
                ))}
            </ul>
        </div>
    )
}
