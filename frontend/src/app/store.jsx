import { configureStore } from '@reduxjs/toolkit'
import menuReducer from './MenuSlice'
import userReducer from './ProfileSlice'
import orderReducer  from './OrderSlice'

export default configureStore({
    reducer: {
        menus : menuReducer,
        user : userReducer,
        orders : orderReducer
    }
  })
  