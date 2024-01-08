import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import getUniqueId from '@/utils/uniqueId/getUniqueId';
import formatPageName from '@/utils/stringFormat/formatPageName';

interface IPathDetail {
      id: string;
      name: string;
}

function useNavPathInfo() {
      const { pathname } = useLocation();
      const [pageDetail, setPageDetail] = useState<{ pageHeaderName: string, pathDetail: IPathDetail[] }>(
            {
                  pageHeaderName: '',
                  pathDetail: []
            }
      );


      // generate list of object containing pageName and its id. 
      const generatePathDetail = useCallback(() => {
            let pageHeaderName = "";

            const currentPath = pathname
                  .split("/")
                  .filter(value => Number.isNaN(parseInt(value)) // dynamic route may have number
                        ? value
                        : undefined
                  );



            const pathDetail: IPathDetail[] = currentPath.map((name: string, index) => {
                  if (index === currentPath.length - 1) {
                        pageHeaderName = formatPageName(name);
                  }

                  return {
                        id: getUniqueId(),
                        name: name,
                  };
            });

            setPageDetail({ pageHeaderName, pathDetail });
      }, [pathname]);


      // provide fullPath though pageName.
      const generatePath = (pageName: string) => {
            const currentPath = pathname.split("/").filter(Boolean);

            return currentPath
                  .slice(0, currentPath.indexOf(pageName) + 1)
                  .map((path: string) => "/" + path)
                  .join("");
      };


      useEffect(() => {
            generatePathDetail();
      }, []);


      return { pageDetail, generatePath } as const;

}

export default useNavPathInfo