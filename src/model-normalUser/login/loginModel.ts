export interface ILogin {
      emailAddress: string;
      password: string;
}

/**
 * @interface
 * Represent login response.
 * 
 * @property {string} accessToken- JWT access token.
 * @property {string} refreshToken- JWT refresh token.
 */
export interface ILoginResponse {
      accessToken: string,
      refreshToken: string,
}