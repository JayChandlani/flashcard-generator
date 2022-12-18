import { combineReducers } from "redux";
import handleCard from "./setCard";
import setId from './setLink'
import addRef from './setRef'
const rootReducers = combineReducers({
    card: handleCard,
    id: setId,
    cardRef: addRef
})

export default rootReducers