import { SIGN_IN, CHANGE_PAGE_STATE } from "../utils/constants";

export const reducer = (state, action) => {
  console.log("Entrou no Reducer. Action : ", action);
  switch (action.type) {
    case SIGN_IN:
      const { uid, client, accessToken } = action.payload;
      console.log("isAuthenticated: True ");
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
    default:
      return state;
  }
};
