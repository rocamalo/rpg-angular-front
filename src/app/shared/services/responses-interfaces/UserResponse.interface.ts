export interface UserResponse {
    data: UserData;
    message: string;
    success: boolean;
}

export interface UserData {
    id: number;
    profilePicturePath: string;
    username: string;
}