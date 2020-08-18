import axios from "axios";

import { SIGN_IN, CHANGE_PAGE_STATE, SAVE_COMPANIES, SAVE_FILTERED_COMPANIES } from "../utils/constants";
import { API_URL } from "../utils/api";

export const signIn = async (email, password) => {
  try {
    const res = await axios.post(API_URL + "/users/auth/sign_in", { email, password });
    axios.defaults.headers.common["uid"] = res.headers.uid;
    axios.defaults.headers.common["client"] = res.headers.client;
    axios.defaults.headers.common["access-token"] = res.headers["access-token"];
    console.log("Resposta da API na SignIn Action:", res);
    return {
      type: SIGN_IN,
      payload: {
        uid: res.headers.uid,
        client: res.headers.client,
        accessToken: res.headers["access-token"]
      }
    };
  } catch (error) {
    console.error(error);
    if (error.response === undefined) alert("O servidor está fora do ar, tente novamente mais tarde.");
    return false;
  }
};

export const changePageState = newPageState => {
  return {
    type: CHANGE_PAGE_STATE,
    payload: newPageState
  };
};

export const saveCompanies = companies => {
  return {
    type: SAVE_COMPANIES,
    payload: companies
  };
};

export const saveFilteredCompanies = filteredCompanies => {
  return {
    type: SAVE_FILTERED_COMPANIES,
    payload: filteredCompanies
  };
};
