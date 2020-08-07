import { combineReducers } from 'redux'
import manageAdmin from './manageAdmin'
import manageHome from './manageHome'
import manageAbout from './manageAbout'


export const rootReducer = combineReducers({
    manageAdmin,
    manageHome,
    manageAbout
})