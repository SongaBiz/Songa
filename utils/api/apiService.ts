import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const BASE_URL = 'https://api.songa.app';

interface ErrorMessage  {
  error: object
}

// Define a custom response type that represents both success and failure cases
type CustomResponse<T> = AxiosResponse<T> | { error: string };

// Function to check if sessionToken and userId are already present in local storage
function hasSession(): boolean {
  const sessionToken = localStorage.getItem('sessionToken');
  const userId = localStorage.getItem('userId');
  return sessionToken !== null && userId !== null;
}

export async function createRiderAccount(data: CreateRiderData): Promise<CustomResponse<any>> {
  // Check if sessionToken and userId already exist in local storage
  if (hasSession()) {
    throw { error: 'You already have an account.' };
  }

  const endpoint = `${BASE_URL}/api/riders/auth/create-rider-account`;

  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data,
  };

  try {
    const response = await axios(endpoint, requestOptions);
    toast.success(response.data.message);

    const sessionToken = response.data.rider.sessionToken;
    const userId = response.data.rider.id;

    localStorage.setItem('sessionToken', sessionToken);
    localStorage.setItem('userId', userId);

    return response;
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message === 'Forbiden. Rider already exists') {
      // Show a custom toast message for "rider exists" error
      // toast.error('The rider already exists. Please use a different phone no.');
      throw { error: 'The rider already exists. Please use a different phone no.' };
    } else if (e.response && e.response.data && e.response.data.message){
      throw e.response.data.message
    } else {
      // Show a generic error message for other errors
      // toast.error('An error occurred while registering the user.');
      throw { error: 'An error occurred while registering the user.' };
    }
  }
}

export async function createRiderProfile(data: CreateRiderProfile): Promise<CustomResponse<any>> {
   // Check if the user has an active session
   if (!hasSession()) {
    throw { error: 'You need to have an account to upload documents.' };
  }
  const endpoint = `${BASE_URL}/api/riders/profile/create-profile`;
  // const endpoint = `${BASE_URL}/api/riders/profile/create-profile/${ localStorage.getItem('userId')}`;
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${localStorage.getItem('sessionToken')}`,
    },
    data: data,
  };

  try {
    const response = await axios(endpoint, requestOptions);
    toast.success(response.data.message);
    return response;
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message){
      throw e.response.data.message
    } else {
      throw { error: 'An error occurred while creating the user profile.' };
    }
  }
}
export async function createBikeDetails(data: BikeDetails): Promise<CustomResponse<any>> {
   // Check if the user has an active session
   if (!hasSession()) {
    throw { error: 'You need to have an account to upload documents.' };
  }
  const endpoint = `${BASE_URL}/api/riders/profile/add-bike-info`;
  const requestOptions: AxiosRequestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':`Bearer ${localStorage.getItem('sessionToken')}`,
    },
    data: data,
  };

  try {
    const response = await axios(endpoint, requestOptions);
    toast.success(response.data.message);
    return response;
  } catch (e: any) {
    if (e.response && e.response.data && e.response.data.message){
      throw e.response.data.message
    } else {
      throw { error: 'An error occurred while registering bike details.' };
    }
  }
}

export async function uploadDocuments(files: FormData): Promise<CustomResponse<any>> {
    // Check if the user has an active session
    if (!hasSession()) {
      throw { error: 'You need to have an account to upload documents.' };
    }
    const endpoint = `${BASE_URL}/api/riders/documents/upload`;
    const requestOptions: AxiosRequestConfig = {
      method: 'POST',
      maxBodyLength: Infinity,
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
        'Authorization':`Bearer ${localStorage.getItem('sessionToken')}`, // Attach the session token to the request
      },
      data: files,
    };
    try {
      const response = await axios(endpoint, requestOptions);
      toast.success('Documents uploaded successfully!');
      return response;
    } catch (e: any) {
      if(e.response && e.response.data &&e.response.data.message){
        // toast.error(e.response.data.message)
        throw { error: e.response.data.message }
      }
      // Show a generic error message for any upload errors
      // toast.error('An error occurred while uploading the documents.');
      throw { error: 'An error occurred while uploading the documents.' };
    }
  }