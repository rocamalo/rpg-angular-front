export interface AuthResponse {
    data: KeyValuePair[];
    success: boolean;
    message: string;
}

export interface KeyValuePair {
    key: string;
    value: string;
}