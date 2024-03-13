import {combineReducers,configureStore} from "@reduxjs/toolkit"
import { exampleReducer } from "./exampleReducer"
import { authReducer } from "./authStore"

const store=configureStore({
    reducer:combineReducers({
        authReducer,
        exampleReducer

    })
})
export {store}