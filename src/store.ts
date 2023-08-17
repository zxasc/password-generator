import { configureStore } from '@reduxjs/toolkit'
import generatorReducer from './components/generatorSlice'
export const store = configureStore({
  reducer: {
    generator: generatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch