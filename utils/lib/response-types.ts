// interfaces that represent the responses we will receive from the backend API. 
// To do this, navigate to the src/lib/ directory and create a new file named types.ts. 
// Within this file, add the following interfaces:
export interface FilteredUser {
    id: string;
    name: string;
    email: string;
    role: string;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
}
  
export interface UserResponse {
    status: string;
    data: {
    user: FilteredUser;
    };
}
  
export interface UserLoginResponse {
    status: string;
    token: string;
}