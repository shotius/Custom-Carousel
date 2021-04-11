import React, { useReducer } from 'react'
import Carousel from './components/Carousel'
import { initialState, slidesReducer } from './reducers/slidesReducer.js'

const App = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState )

  const {slides} = state
  console.log(slides)
  return (
    <div>
      <Carousel state={state} dispatch={dispatch}>
       {slides.map((item, index) => (
         <div key={index}>{item}</div>
       ))}
      </Carousel>
    </div>
  )
}
export default App