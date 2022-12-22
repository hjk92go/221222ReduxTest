import {combineReducers} from "redux"

import currentUser from "./currentUser" 
import guest from "./guest"
import board from "./board"

const rootReducer = combineReducers({
    currentUser,guest, board
})
export default rootReducer