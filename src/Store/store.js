import {createStore,compose,applyMiddleware} from 'redux';
import rootReducer from '../Reducers/reducer';
import thunk from 'redux-thunk';
// import {preventDataDuplication} from '../Middleware/middleware';

const storeEnhancers = compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
  );

export default store;