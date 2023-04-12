import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './productsSlice.js'

export const store = configureStore({
  reducer: {
    productsSlice: sliceReducer
  },
})