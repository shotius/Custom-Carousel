import React from 'react'
import styles from  './Slide.module.css'

export const Slide = (props) => {
    return (
        <div>
            <li className={styles.slide}>{props.item}</li>
        </div>        
    )
}