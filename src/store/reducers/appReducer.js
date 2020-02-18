import {actionTypes} from './../actions';

export default (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS:
      return {...state, loading: true};
    case actionTypes.SET_PHOTOS:
      return {...state, loading: false, photos: action.photos};
    default:
      return {...state};
  }
};
