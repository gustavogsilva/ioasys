import {
  SIGN_IN,
  CHANGE_PAGE_STATE,
  SAVE_COMPANIES,
  SAVE_FILTERED_COMPANIES,
  STAND_BY,
  GET_DETAILED_COMPANY,
  SIGN_OUT,
  SET_LOADING
} from "../utils/constants";

export const reducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      const { uid, client, accessToken } = action.payload;
      return {
        ...state,
        uid,
        client,
        accessToken,
        isAuthenticated: true
      };
    case SIGN_OUT:
      return {
        ...state,
        uid: "",
        client: "",
        accessToken: "",
        isAuthenticated: false
      };
    case CHANGE_PAGE_STATE:
      if (action.payload === STAND_BY) {
        return {
          ...state,
          pageState: action.payload,
          filteredCompanies: []
        };
      }
      return {
        ...state,
        pageState: action.payload
      };
    case SAVE_COMPANIES:
      return {
        ...state,
        companies: action.payload
      };
    case SAVE_FILTERED_COMPANIES:
      return {
        ...state,
        filteredCompanies: action.payload
      };
    case GET_DETAILED_COMPANY:
      return {
        ...state,
        detailedCompany: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
