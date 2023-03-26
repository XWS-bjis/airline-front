export interface LoginCredential{
    userName: string,
    password: string
}

export interface UserTokenState{
    accessToken: string,
    expiresIn: number,
    role: string,
    userId: string
}