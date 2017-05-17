import { combineReducers } from 'redux';

import accountRuducer from './account';
import kidRuducer from './kid';

const rootReducer = combineReducers({
  account:accountRuducer,
  kid:kidRuducer
})

export default rootReducer;
