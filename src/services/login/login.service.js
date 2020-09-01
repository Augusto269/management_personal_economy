import moment from "moment";
import axios from "axios";

const getHeader = () => {
  return {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("awesomeToken"),
  };
};

export const loginService = (user, pass, lang) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/1.0/auth`, {
      user: user,
      pass: pass,
      language: lang,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

export const logoutService = () => {
  return axios
    .put(`${process.env.REACT_APP_API_URL}/api/1.0/user/`, { last_logout: moment() }, { headers: getHeader() })
    .then((response) => {
      Logout();
      return response.data;
    })
    .catch((err) => {
      Logout();
      return err.response.data;
    });
};

export const Logout = () => {
  localStorage.clear();
  window.location.href = "/auth";
};

export const getUserService = () => {
  return axios
    .get(`${process.env.REACT_APP_API_URL}/api/1.0/user`, { headers: getHeader() })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

