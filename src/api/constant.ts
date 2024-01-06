import axios from "axios";
import { cookiesStore } from "@/utils/cookiesHandler";
import { authApi } from "./service-normalUser/authApi";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

const API_URL = BASE_URL + "/api";


const AXIOS = axios.create({
      baseURL: API_URL,
});


// Initialize the array that will hold requests that need to be retried after access token is refreshed
let refreshQueue: any[] = [];

let isRefreshing = false;

AXIOS.interceptors.request.use(
      (config) => {
            const accessToken = cookiesStore.getItem("access_token");

            if (accessToken) {
                  if (config.headers) {
                        config.headers["Authorization"] = "Bearer " + accessToken;
                        config.headers["Accept"] =
                              "application/json, application/xml, text/plain, text/html, *.*";
                        config.headers["Access-Control-Allow-Origin"] = "*";
                        config.headers["Access-Control-Allow-Credentials"] = "true";

                        config.headers["Content-Type"] = (config.data instanceof FormData)
                              // If sending form data, set Content-Type to multipart/form-data
                              ? "multipart/form-data"
                              // If sending JSON data, set Content-Type to application/json
                              : "application/json;charset=utf-8"
                  }
            }
            return config;
      },
      (error) => {
            return Promise.reject(error);
      }
);


AXIOS.interceptors.response.use(
      (response) => response,
      async (error) => {
            const originalRequest = error.config;

            // if the request have 401 status code and the request has not been retrieved before
            if (
                  error.response.status === 401 &&
                  !originalRequest._retry
            ) {
                  //access token is not being refreshed
                  if (!isRefreshing) originalRequest._retry = true;

                  try {
                        await new Promise((resolve, reject) => {
                              refreshQueue.push({ resolve, reject });

                              //access token is not being refreshed
                              if (!isRefreshing)
                                    refreshAccessToken();
                        });

                        return await AXIOS({
                              ...originalRequest,
                              headers: {
                                    ...originalRequest.headers,
                                    Authorization: "Bearer " + cookiesStore.getItem("access_token"),
                                    sent: true,
                              },
                        });
                  } catch (error_1) {
                        return await Promise.reject(error_1);
                  }
                  finally {
                        // Remove the request from the refresh queue and set isRefreshing to false
                        refreshQueue = refreshQueue.filter(request => request.originalRequest !== originalRequest);

                        isRefreshing = false;
                  }
            }

            return Promise.reject(error);
      }
);


async function refreshAccessToken() {
      isRefreshing = true;

      try {

            const response = await authApi.refreshToken({
                  accessToken: cookiesStore.getItem("access_token") ?? "",
                  refreshToken: cookiesStore.getItem("refresh_token") ?? "",
            });

            const { accessToken, refreshToken } = response.data;

            cookiesStore.saveItem({ key: 'access_token', data: accessToken });
            cookiesStore.saveItem({ key: 'refresh_token', data: refreshToken });

            // Resolve all pending requests in the refresh queue with the new access token
            refreshQueue.forEach(request => {
                  request.resolve();
            });
      } catch (error) {

            console.log("here in error ");
            //TODO: check here if user is in admin page or not
            //move to login page if token is invalid and if present location is not page associated with login
            // if (window.location.pathname !== "/") {
            //       window.location.replace("/")
            // }

            // Reject all pending requests in the refresh queue with the error
            refreshQueue.forEach(request_1 => {
                  request_1.reject(error);
            });

      }
}

export default AXIOS;