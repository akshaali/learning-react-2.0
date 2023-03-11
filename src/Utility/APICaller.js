import axois from "axios";

export const APICaller = ({ url, data, method = "GET" }) => {
  return new Promise((resolve, reject) => {
    const payload = { url, method };
    if (data) {
      payload.data = data;
    }
    axois(payload)
      .then((res) => {
        console.log("API resolved Successfully", res);
        resolve(res);
      })
      .catch((err) => {
        console.log("API failed", err);
        reject(err);
      });
  });
};

/*
Status Code 
    1. 200 - Success
    2. 400 - Bad Request
    3. 401 - Unauthorized
    4. 404 - Not Found
    5. 500 - Internal Server Error
*/