export const GET_VENUES_REQUEST = 'GET_VENUES_REQUEST';
export const GET_VENUES_SUCCESS = 'GET_VENUES_SUCCESS';
export const GET_VENUES_ERROR = 'GET_VENUES_ERROR';

export interface CoordinateType {
  longitude: number;
  latitude: number;
}

interface RegionType {
  center: CoordinateType;
}

interface CategoriesType {
  alias: string;
  title: string;
}

export interface VenueType {
  id: string;
  phone: string;
  display_phone: string;
  review_count: number;
  rating: number;
  url: string;
  name: string;
  coordinates: CoordinateType;
  is_closed: boolean;
  image_url: string;
  categories: CategoriesType[];
}

export interface GetVenuesResponse {
  region: RegionType;
  businesses: VenueType[];
}

export interface VenuePayloadType {
  venues: VenueType[];
  errorStatus: number | null;
  isFetching: boolean;
}

export interface VenueAction extends VenuePayloadType {
  type:
    | typeof GET_VENUES_SUCCESS
    | typeof GET_VENUES_REQUEST
    | typeof GET_VENUES_ERROR;
}
