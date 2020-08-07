import { combineReducers } from 'redux'
import manageAdmin from './manageAdmin'
import manageHome from './manageHome'


export const rootReducer = combineReducers({
    manageAdmin,
    manageHome
})