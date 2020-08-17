import { MAIN } from "../utils/constants";

export const initialState = {
  accessToken: "",
  client: "",
  uid: "",
  isAuthenticated: false,
  pageState: MAIN, // MAIN, SEARCH, DETAILS
  detailedCompany: {},
  CompaniesList: []
};
