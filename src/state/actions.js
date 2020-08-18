import axios from "axios";
import { getRequest } from "../utils/api";
import { API_URL } from "../utils/api";
import {
  SIGN_IN,
  CHANGE_PAGE_STATE,
  SAVE_COMPANIES,
  SAVE_FILTERED_COMPANIES,
  GET_DETAILED_COMPANY,
  SIGN_OUT,
  SET_LOADING
} from "../utils/constants";

export const signIn = async (email, password) => {
  try {
    const res = await axios.post(API_URL + "/users/auth/sign_in", { email, password });
    axios.defaults.headers.common["uid"] = res.headers.uid;
    axios.defaults.headers.common["client"] = res.headers.client;
    axios.defaults.headers.common["access-token"] = res.headers["access-token"];
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

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
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

export const setLoading = boolean => {
  return {
    type: SET_LOADING,
    payload: boolean
  };
};

export const getDetailedCompany = async id => {
  try {
    const { enterprise } = await getRequest(`/enterprises/${id}`);
    return {
      type: GET_DETAILED_COMPANY,
      payload: enterprise
    };
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro ao acessar o servidor");
    return {};
  }
};
