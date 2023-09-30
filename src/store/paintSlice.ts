import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface PaintState {
  title: string
  author: string
  components: any[]
}

// Define the initial state using that type
const initialState: PaintState = {
  title: '未命名',
  author: '未命名',
  components: [],
}

export const paintSlice = createSlice({
  name: 'paint',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<any>) => {
      state.components.push(action.payload)
    },
    editTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    editAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload
    },
    clearComponents: (state) => {
      state.components = []
    },
  },
})

export const { addComponent, editTitle, editAuthor } = paintSlice.actions
export const totalComponents = (state: RootState) => state.paint.components

export default paintSlice.reducer
