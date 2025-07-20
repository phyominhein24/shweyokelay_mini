import { httpErrorHandler, httpResponseHandler } from "./handler";

// import { getData } from "./localstorage";
import http from "../constants/axios";
import { endpoints } from "../constants/endpoints";

// import { keys } from "../constants/config";

const urlParams = (params) => {
  let paramsArray = [];
  Object.keys(params).map((value) => {
    return paramsArray.push(`${value}=${params[value]}`);
  });
  return paramsArray.join("&");
};

/**
 * Http get method request
 * @param {*} path
 * @param {*} params
 * @returns
 */

export const getRequest = async (path, params) => {
  try {
    const url = params ? `${path}?${urlParams(params)}` : path;
    const result = await http.get(url);
    return httpResponseHandler(result);
  } catch (error) {
    return httpErrorHandler(error);
  }
};

/**
 * Http post method request
 * @param {*} path
 * @param {*} payload
 * @returns
 */
export const postRequest = async (path, payload) => {
  try {
    const result = await http.post(path, payload);
    return httpResponseHandler(result);
  } catch (error) {
    return httpErrorHandler(error);
  }
};

export const createOrder = async (amount) => {
  try {
    const response = await postRequest(endpoints.paymentOrder, {
      total_amount: amount,
    });
    console.log(response)
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

export  const fetchToken = async (ssoString) => {
  try {
    const { data } = await postRequest(endpoints.userInfo, {
      access_token: ssoString,
    });
    console.log(data, "inside useToken");
    return data;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

/**
 * Http put method request
 * @param {*} path
 * @param {*} payload
 * @returns
 */
export const putRequest = async (path, payload) => {
  try {
    const result = await http.put(path, payload);
    return httpResponseHandler(result);
  } catch (error) {
    return httpErrorHandler(error);
  }
};

/**
 * Http delete method request
 * @param {*} path
 * @returns
 */
export const delRequest = async (path) => {
  try {
    const result = await http.delete(path);
    return httpResponseHandler(result);
  } catch (error) {
    return httpErrorHandler(error);
  }
};
