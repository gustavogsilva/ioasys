import { SIGN_IN, CHANGE_PAGE_STATE, SAVE_COMPANIES, SAVE_FILTERED_COMPANIES } from "../utils/constants";

export const reducer = (state, action) => {
  console.log("Entrou no Reducer com a seguinte action : ", action);
  switch (action.type) {
    case SIGN_IN:
      const { uid, client, accessToken } = action.payload;
      console.log("isAuthenticated");
      return {
        ...state,
        uid,
        client,
        accessToken,
        isAuthenticated: true
      };
    case CHANGE_PAGE_STATE:
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
    default:
      return state;
  }
};
