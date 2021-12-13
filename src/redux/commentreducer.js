import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mainvalue: "Click on Comment",
}

export const comment = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    add: (state) => {

      state.mainvalue = "Login"
    },
    remove: (state) => {
      state.mainvalue = prompt()
    },
   
  },
})

export const { add, remove } = comment.actions

export default comment.reducer