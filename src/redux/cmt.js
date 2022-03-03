

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  invalue:"Add Some Thing",
}

export const comment = createSlice({
  name: 'comment1',
  initialState,
  reducers: {
    
    update: (state, action) => {
      state.invalue = action.payload
    }
  },
})

export const { update } = comment.actions

export default comment.reducer