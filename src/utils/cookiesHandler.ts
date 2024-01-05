import { COOKIES_TOKEN } from "@/enum/commonEnum";

type KEY = COOKIES_TOKEN;

interface IUseCookies {
      key: COOKIES_TOKEN,
      data?: string,
}

export const cookiesStore = {

      saveItem: ({ key, data }: IUseCookies) => {
            const expires = new Date(Date.now() + 5 * 864e5).toUTCString();

            document.cookie = `${key}=${data}; expires=${expires}; path=/; secure; HttpOnly; SameSite=Strict`;

      },

      getItem: (key?: KEY): string | undefined => {
            const cookie = document.cookie;

            const cookieList = cookie.split(';');

            //get required token from cookies
            const tokenList = cookieList.filter(item => {
                  return item.toLowerCase().includes(key!.toLowerCase())
            });

            if (!tokenList.length) return undefined;

            //remove key from requested cookies token
            const requiredToken = tokenList[0].trim().replace(`${key}=`, '');

            //key from cookies
            const cookiesKey = tokenList[0].trim().split('=')[0];

            //if key got from cookies is not exactly match with requested key
            if (cookiesKey !== key) {
                  deleteCookies(cookiesKey);

                  return undefined;
            }

            return requiredToken.toString();

      },

      deleteItem: (key: COOKIES_TOKEN) => {

            return deleteCookies(key);
      }

};


const deleteCookies = (key: string) => {
      const expiryDate = new Date(Date.now() - 1).toUTCString();

      return document.cookie = `${key}=; expires==${expiryDate}; path=/; secure; HttpOnly; SameSite=Strict`;
}