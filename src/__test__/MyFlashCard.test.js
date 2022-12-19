import MyFlashCard from "../MyFlashCard/MyFlashCard";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { BrowserRouter } from "react-router-dom";


const mockReducer = (state = [], action) => {
    if (action.type === 'add') {
        return [...state, action.payload]

    } else if (action.type === 'remove') {
        let cardData = state.filter(obj => state.indexOf(obj) !== state.indexOf(action.payload));
        return cardData
    } else {
        return state
    }
}
const rootReducers = combineReducers({
    card: mockReducer,
})


const renderWithRedux = (
    component,
    { initialState, store = createStore(rootReducers, initialState) } = [],
) => {
    return {
        ...render(
            <BrowserRouter>
                <Provider store={store}>{component}</Provider>
            </BrowserRouter>),
        store,
    };
};
afterEach(cleanup)
describe(MyFlashCard, () => {



    it('should show default values till  card is not created', () => {
        renderWithRedux(<MyFlashCard />)
        expect(screen.getByText(/no cards to show!!/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /create card/i })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    })


    it('should show card after the  card is created  data is and recieved', () => {
        renderWithRedux(<MyFlashCard />, {
            initialState: {
                card: [{
                    group: "groupname",
                    groupicon: "",
                    description: "description",
                    card: []
                }]
            }
        })
        expect(screen.getByAltText('groupicon')).toBeInTheDocument()
        expect(screen.getByRole('link', { name: /view cards/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /groupname/i })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: /description/i })).toBeInTheDocument()
    })

})