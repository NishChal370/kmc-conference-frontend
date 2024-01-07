import { UserRole } from "@/enum/commonEnum";
import { getDecodedToken } from "./getDecodedToken";

const getTokenDetail = {
      loggedInUserRole: () => {
            const token = getDecodedToken();

            const role = token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            return role ? role as UserRole : undefined;
      },

      loggedInUserName: () => {
            const token = getDecodedToken();

            return token["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      }

}

export default getTokenDetail