import { combineReducers } from "redux";
import handleCard from "./setCard";
import setId from './setLink'
const rootReducers = combineReducers({
    card: handleCard,
    id:setId,
})

export default rootReducers