import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as mainReducer } from 'modules/main';


const reducer = combineReducers({
    form: formReducer,
    main: mainReducer
});

export default reducer;
