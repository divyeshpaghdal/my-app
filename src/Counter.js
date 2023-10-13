import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { count, increment, decrement} from '../src/slice/counterslice'

const Counter = () => {
  const text = useSelector(count)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{text}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter