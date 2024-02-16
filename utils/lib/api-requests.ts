// create the API request functions. 
// These functions handle various interactions with the backend API and serve specific purposes:
import { FilteredUser, UserLoginResponse, UserResponse } from "./response-types";

const BASE_URL = 'https://uat-api.songabusiness.co.ke';

async function handleResponse<T>(response: Response): Promise<T> {
  const contentType = response.headers.get("Content-Type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await response.json() : await response.text();

  if (!response.ok) {
    if (isJson && data.errors !== null) {
      throw new Error(JSON.stringify(data.errors));
    }

    throw new Error(data.message || response.statusText);
  }

  return data as T;
}

// This function is responsible for sending a POST request to submit the user’s registration credentials to the backend server.
export async function apiRegisterUser(
  credentials: string
): Promise<FilteredUser> {
  const response = await fetch(`${BASE_URL}/Account/Register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}

// This function sends a POST request to submit the user’s sign-in credentials to the backend API.
export async function apiLoginUser(credentials: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/Account/Login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: credentials,
  });

  return handleResponse<UserLoginResponse>(response).then((data) => data.token);
}

//  This function sends a GET request to log out the user from the API.
export async function apiLogoutUser(): Promise<void> {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse<void>(response);
}

// This function exchanges a token for the authenticated user’s credentials.
export async function apiGetAuthUser(token?: string): Promise<FilteredUser> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const response = await fetch(`${BASE_URL}/api/users/me`, {
    method: "GET",
    credentials: "include",
    headers,
  });

  return handleResponse<UserResponse>(response).then((data) => data.data.user);
}
