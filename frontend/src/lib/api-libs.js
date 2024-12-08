import axios from "axios";

const base_url = "http://localhost:8181";

export async function login(endpoint, data) {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logout(endpoint, token) {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function isLogin(endpoint, token) {
  try {
    const response = await axios.get(`${base_url}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
