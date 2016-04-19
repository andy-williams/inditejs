import {
  POPULATE_META_DATA_LIST,
  CLOSE_META_DATA_LIST,
  EXPAND_META_DATA_LIST,
} from './../actions/meta';

export const initialState = {
  isOpen: false,
  metaDataCollecton: []
};

export function metaList(state = initialState, action) {
  switch(action.type) {
    case EXPAND_META_DATA_LIST:
      return state.object.assign({}, state, {
        isOpen: true
      });
      break;
    case CLOSE_META_DATA_LIST:
      return state.object.assign({}, state, {
        isOpen: false
      });
    case POPULATE_META_DATA_LIST:
      return state.object.assign({}, state, {
        metaDataCollection: action.metaDataCollecton
      });
    default:
      return state;
  }
}