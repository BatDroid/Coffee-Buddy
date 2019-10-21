import {combineReducers} from 'redux';
import {
  VenueAction,
  VenueType,
  GET_VENUES_SUCCESS,
  GET_VENUES_REQUEST,
  GET_VENUES_ERROR,
} from '../actions/types';

function venueReducer(state: VenueType[] | null = null, action: VenueAction) {
  switch (action.type) {
    case GET_VENUES_SUCCESS:
      return action.venues;
    default:
      return state;
  }
}

function isFetchingReducer(state: boolean = false, action: VenueAction) {
  switch (action.type) {
    case GET_VENUES_REQUEST:
      return true;
    case GET_VENUES_SUCCESS:
    case GET_VENUES_ERROR:
      return false;
    default:
      return state;
  }
}

function errorReducer(state: number | null = null, action: VenueAction) {
  switch (action.type) {
    case GET_VENUES_REQUEST:
    case GET_VENUES_SUCCESS:
      return null;
    case GET_VENUES_ERROR:
      return action.errorStatus;
    default:
      return state;
  }
}

export interface VenuesStoreType {
  errorStatus: number | null;
  isFetching: boolean;
  venues: VenueType[] | null;
}

export default combineReducers({
  venues: venueReducer,
  isFetching: isFetchingReducer,
  errorStatus: errorReducer,
});
