
import { combineReducers } from 'redux'
import handleApiReducers from './Reducers/handleAPIReducers';
import handleMainStore from './Reducers/handleMainStore';


const rootReducer = combineReducers({
    mainStore: handleMainStore,
    handleAPI: handleApiReducers
})

export default rootReducer;
