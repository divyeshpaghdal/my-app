import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  value:10,
  todo:0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment:(state) => {
      state.value += 10
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
})


export const count = state => state.counter.value
export const { increment, decrement} = counterSlice.actions
export default counterSlice.reducer