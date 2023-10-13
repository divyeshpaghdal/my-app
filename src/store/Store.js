import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../slice/counterslice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
