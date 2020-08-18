import { STAND_BY } from "../utils/constants";

export const initialState = {
  accessToken: "",
  client: "",
  uid: "",
  isAuthenticated: false,
  pageState: STAND_BY, // STAND_BY, SEARCH, DETAILS
  companies: [],
  filteredCompanies: [],
  detailedCompany: {},
  loading: false
};
