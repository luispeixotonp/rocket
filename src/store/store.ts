import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import thunkMiddleware from 'redux-thunk';


const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store