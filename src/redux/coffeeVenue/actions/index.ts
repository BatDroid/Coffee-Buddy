import {Dispatch} from 'redux';
import {getVenues} from 'sdk';
import {
  GetVenuesResponse,
  GET_VENUES_REQUEST,
  GET_VENUES_ERROR,
  GET_VENUES_SUCCESS,
} from './types';

export function getCoffeeVenues() {
  return (dispatch: Dispatch) => {
    dispatch({
      type: GET_VENUES_REQUEST,
    });
    getVenues()
      .then((response: GetVenuesResponse) => {
        dispatch({
          type: GET_VENUES_SUCCESS,
          venues: response.businesses,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_VENUES_ERROR,
          errorStatus: 500,
        });
      });
  };
}
