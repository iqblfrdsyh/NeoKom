import { isLogin } from "./api-libs";

export async function authenticate(route, token) {
  try {
    const response = await isLogin(route, token);
    return response;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Token expired or invalid.");
    }
    throw error;
  }
}
