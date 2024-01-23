import { configureStore } from '@reduxjs/toolkit'
import campaignsReducer from './features/campaigns/campaignsSlice'

export default configureStore({
    reducer: {
        campaigns: campaignsReducer
    },
})