
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mainvalue: 0,
}

export const counterMain = createSlice({
  name: 'counterMain',
  initialState,
  reducers: {
    incrementMain: (state) => {

      state.mainvalue += 2
    },
    decrementMain: (state) => {
      state.mainvalue -= 3
    },
   
  },
})

export const { incrementMain, decrementMain } = counterMain.actions

export default counterMain.reducer