import axios from "axios";

export const API_URL = "https://empresas.ioasys.com.br/api/v1";

export const getRequest = async path => {
  try {
    const res = await axios.get(API_URL + path);
    return res.data;
  } catch (error) {
    console.error(error);
    if (error.response === undefined) alert("O servidor está fora do ar, tente novamente mais tarde.");
    return false;
  }
};
