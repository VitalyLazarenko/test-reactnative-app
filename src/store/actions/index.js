export const actionTypes = {
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  SET_PHOTOS: 'SET_PHOTOS',
};

export const fetchPhotosActionCreator = () => ({type: actionTypes.FETCH_PHOTOS});

export const setPhotosActionCreators = photos => ({type: actionTypes.SET_PHOTOS, photos});
