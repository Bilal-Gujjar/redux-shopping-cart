

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  invalue:"Add Some Thing",
}

export const comment = createSlice({
  name: 'comment1',
  initialState,
  reducers: {
    // add: (state) => {

    //   state.invalue = "Login"
    // },
    // remove: (state) => {
    //   state.invalue = "Log Out"
    // },
    update: (state, action) => {
      state.invalue = action.payload
    }
  },
})

export const { add, remove ,update } = comment.actions

export default comment.reducer