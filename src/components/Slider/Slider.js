import React, { useRef, useState} from 'react'

export const Slider = () => {
    const array = [0,1,2,3,4]
    const slideRef = useRef(null)
    const [x, setX] = useState(0)
    
    const goLeft = () => {
        setX(x + 100)
        
        
    }
    
    const goRight = () => {
        if(x === -400) {
            console.log('went back')
            setX(0)
            
        } else {
            console.log(x)
            setX(x - 100)

        }
    }
  
    const previousSlide = () => {
     slideRef.current.style.transform = `translateX(100%)`
    }
    
    return (
        <div className="slider">
            {array.map((slide, index) => 
                <div key={index} className="slide" ref={slideRef} style={{transform: `translateX(${x}%)`}}>
                    {slide}
                </div>
            )}
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
        </div>
    )
}

export default Slider