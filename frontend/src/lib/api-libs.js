import axios from "axios";

const base_url = "http://localhost:8181";

export async function getData(endpoint, token) {
  try {
    const response = await axios.get(`${base_url}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function createAssignment(endpoint, data) {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, data, {
      headers: {
        "Content-Type": "multipart/form-data", 
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteData(endpoint, id) {
  try {
    const response = await axios.delete(`${base_url}/${endpoint}?id=${id}`);

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function login(endpoint, data) {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, data);
    const userData = {
      fullName: "",
      email: "",
      kelas: "",
    };
    localStorage.setItem("user", JSON.stringify(userData));
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function regist(endpoint, data) {
  try {
    const response = await axios.post(`${base_url}/${endpoint}`, data);
    return response;
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
    localStorage.setItem("user", JSON.stringify(response.data.data));
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
