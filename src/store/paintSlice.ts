import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index'

// Define a type for the slice state
interface PaintState {
  title: string
  author: string
  curIndex: number
  components: any[]
  zoom: number
}

// Define the initial state using that type
const initialState: PaintState = {
  title: '未命名',
  author: '未命名',
  curIndex: 0,
  components: [],
  zoom: 1,
}

export const paintSlice = createSlice({
  name: 'paint',
  initialState,
  reducers: {
    addComponent: (state, action: PayloadAction<any>) => {
      state.components.push(action.payload)
      state.curIndex = state.components.length - 1
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
    setCurChoose: (state, action: PayloadAction<number>) => {
      state.curIndex = action.payload
    },
    addZoom: (state) => {
      if (state.zoom < 2) {
        state.zoom += 0.25
      }
    },
    subZoom: (state) => {
      if (state.zoom > 0.25) {
        state.zoom -= 0.25
      }
    },
  },
})

export const { addComponent, editTitle, editAuthor, clearComponents, setCurChoose, addZoom, subZoom } = paintSlice.actions
export const totalComponents = (state: RootState) => state.paint.components

export default paintSlice.reducer
