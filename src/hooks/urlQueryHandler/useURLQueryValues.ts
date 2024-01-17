import { useSearchParams } from 'react-router-dom';
import { OrderBy } from '@/enum/commonEnum';
import { STARTING_PAGE_NUMBER } from '@/shared/pagination/constants/pagination';


// NOTE: This hook can be directly called OR, can be called through useURLQueryHandler hook.

interface IUseURLQueryValues {
      searchParamInputList?: string[];
      sortingValueList?: string[];
}

function useURLQueryValues({ searchParamInputList, sortingValueList }: IUseURLQueryValues | undefined = {}) {
      const [searchParamsState] = useSearchParams();

      const getInputSearchParamValues = () => {
            /**
             // NOTE: making searchParamInputList optional
             * because, user might also call this hooks to get other value rather
             * then getInputSearchParamValues function.
             * in such case, user does not need to provide searchParamInputList value.
             * 
             *  so, add searchParamInputList before calling this function 
             **/
            if (!searchParamInputList) {
                  throw new Error('searchParamInputList is required !, make sure you add searchParamInputList in useURLQueryValues hook');
            }

            const searchParams: { [key: string]: string | undefined; } = {};

            searchParamInputList.forEach((searchParamInput: string) => {
                  //get search input value from search parma and store in object
                  searchParams[searchParamInput] = searchParamsState.get(searchParamInput) ?? undefined;
            })

            return searchParams;
      }


      // get sort by value
      const getSearchParamSortBy = <TSortBy>(): TSortBy | undefined => {
            /**
            //NOTE: making sortingValueList optional
            * because, user might also call this hooks to get other value rather
            * then getSearchParamSortBy function.
            * in such case, user does not need to provide sortingValueList value
            * 
            * so, add sortingValueList before calling this function 
            **/
            if (!sortingValueList) {
                  throw new Error('sortingValueList is required !, make sure you add sortingValueList in useURLQueryValues hook');
            }

            const searchParamSortBy = searchParamsState.get('sortBy');

            const sortBy = !sortingValueList.includes(searchParamSortBy as string)
                  ? undefined
                  : searchParamSortBy ?? undefined;


            return sortBy as TSortBy | undefined;
      };


      // current orderBy value from searchParam
      const getCurrentOrderBy = () => {
            const currentOrderBy: OrderBy = parseInt(searchParamsState.get('order') as string);

            const currentSortBy = getSearchParamSortBy();

            // should have sortBy in-order to have orderBy
            return currentSortBy ? currentOrderBy : undefined;
      }

      //check if search param have search input values
      const doSearchParamHaveInputValue = () => {

            return Object.values(getInputSearchParamValues()).some(value => !!value);
      };


      // current pageNumber  from searchParam
      let currentPageNumber = parseInt(searchParamsState.get("pageNumber") as string);
      currentPageNumber = currentPageNumber ? currentPageNumber : STARTING_PAGE_NUMBER;


      return {
            currentPageNumber,
            getCurrentOrderBy,
            getInputSearchParamValues,
            getSearchParamSortBy,
            doSearchParamHaveInputValue,
      } as const;
}

export default useURLQueryValues