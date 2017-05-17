import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let account = {
  currentUser : {}
}

let kid = {

}

const defultState = {
  account,
  kid
}

const store = createStore(rootReducer,defultState,compose(applyMiddleware(thunk)));

export default store;
