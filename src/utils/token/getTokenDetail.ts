import { UserRole } from "@/enum/commonEnum";
import { getDecodedToken } from "./getDecodedToken";

const getTokenDetail = {
      loggedInUserRole: () => {
            const token = getDecodedToken();

            const role = token["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

            return role ? role as UserRole : undefined;
      },

}

export default getTokenDetail