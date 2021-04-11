import React, { useState, useReducer, useRef} from 'react'
import Carousel from './components/Carousel/index'

const initialCarouselState = {
  offset: 0,
  desire: 0,
  active: 0
}


// const handlers = useSwipeable({
//   onSwipedLeft(e) {
//     const t = threshold(e.event.target);

//     if (e.deltaX >= t) {
//       dispatch({
//         type: "next",
//         length
//       });
//     } else {
//       dispatch({
//         type: "drag",
//         offset: 0
//       });
//     }
//   },
//   onSwipedRight(e) {
//     const t = threshold(e.event.target);

//     if (-e.deltaX >= t) {
//       dispatch({
//         type: "prev",
//         length
//       });
//     } else {
//       dispatch({
//         type: "drag",
//         offset: 0
//       });
//     }
//   },
//   trackMouse: true,
//   trackTouch: true
// });

const App = () => {
  
  // const [state, dispatch] = useReducer(carouselReducer, initialCarouselState)

  function shift() {
    const [...newArray] = array
    newArray.push(newArray.shift())
    setArray(newArray)
  } 

  
  
  return (
    <div className="App">
      <Carousel />
    </div>
  )
}
export default App