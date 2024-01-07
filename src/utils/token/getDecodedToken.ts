import { jwtDecode } from 'jwt-decode';
import { cookiesStore } from "../cookiesHandler";
import { IAccessToken } from "@/models/token/jwtTokenModel";



const initialTokenData: IAccessToken = {
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress": undefined,
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid": undefined,
      "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": undefined,
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name": undefined,
      "exp": undefined,
      "iss": undefined,
      "aud": undefined,
}


export const getDecodedToken = () => {
      const token = cookiesStore.getItem("access_token");

      if (!token) return initialTokenData;

      return jwtDecode(token) as IAccessToken;
}
