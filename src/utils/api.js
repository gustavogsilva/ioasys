import axios from "axios";

export const API_URL = "https://empresas.ioasys.com.br/api/v1";

export const getRequest = path => {
  return axios.get(API_URL + path).then(res => res.data);
};
