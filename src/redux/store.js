import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        applyMiddleware()
        // other store enhancers if any
    )
);

export default store;
