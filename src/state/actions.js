import axios from "axios";

import { SIGN_IN, CHANGE_PAGE_STATE } from "../utils/constants";
import { API_URL } from "../utils/api";

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
    if (error.response.data.success === undefined) alert("O servidor está fora do ar, tente novamente mais tarde.");
    return false;
  }
};

export const changePageState = newPageState => {
  return {
    type: CHANGE_PAGE_STATE,
    payload: newPageState
  };
};
