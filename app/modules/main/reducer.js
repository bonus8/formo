import { handleActions } from 'redux-actions';
import * as actions from './actions';


const initialState = {
  user: {
    isFetching: false,
    isLogin: false,
    data: {}
  }
}

const reducer = handleActions({
  [actions.requestLogin]: {
    next(state, action) {
      return {
        ...state,
        user: {
          ...state.user,
          isFetching: true
        }
      };
    },
    throw(state, action) {
      return { ...state };
    }
  },
  [actions.receiveLogin]: {
    next(state, action) {
      return {
        ...state,
        user: {
          // ...action.payload,
          isFetching: false
        }
      };
    },
    throw(state, action) {
      return { ...state };
    }
  },
  [actions.setSession]: {
    next(state, action) {
      const { payload } = action;
      return {
        ...state,
        user: {
          data: {
            email: payload.email,
            photoUrl: payload.photoUrl,
            displayName: payload.displayName,
            phoneNumber: payload.phoneNumber,
            id: payload.uid,
          },
          isLogin: true,
          isFetching: false
        }
      };
    },
    throw(state, action) {
      return { ...state };
    }
  },
  [actions.clearSession]: {
    next(state, action) {
      return {
        ...state,
        user: {
          data: {
            ...initialState.user.data
          },
          isLogin: false,
          isFetching: false
        }
      };
    },
    throw(state, action) {
      return { ...state };
    }
  }
}, initialState);

export default reducer;
