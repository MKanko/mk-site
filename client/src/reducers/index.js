import { combineReducers } from 'redux'
import manageAdmin from './manageAdmin'
import manageHome from './manageHome'
import manageAbout from './manageAbout'
import managePortfolio from './managePorfolio'
import manageProjects from './manageProjects'
import manageBlog from './manageBlog'
import managePosts from './managePosts'
import manageResume from './manageResume'
import manageCategories from './manageCategories'
import manageContact from './manageContact'


export const rootReducer = combineReducers({
    manageAdmin,
    manageHome,
    manageAbout,
    managePortfolio,
    manageProjects,
    manageBlog,
    managePosts,
    manageResume,
    manageCategories,
    manageContact    
})