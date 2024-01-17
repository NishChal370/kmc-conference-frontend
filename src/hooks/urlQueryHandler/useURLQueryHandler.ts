import { useSearchParams } from "react-router-dom"
import { OrderBy } from "@/enum/commonEnum";
import { IBasicSearchParam } from "@/models/commonModel";
import useURLQueryValues from "./useURLQueryValues";
import { STARTING_PAGE_NUMBER } from "@/shared/pagination/constants/pagination";



function useURLQueryHandler<TSearchQuery extends object, TBasicSearchQuery extends object>() {
      const [searchParamState, setSearchParamState] = useSearchParams();

      const changeSearchQuery = (query: Omit<TSearchQuery, keyof TBasicSearchQuery>) => {
            if (Object.keys(query).length <= 0) {
                  throw new Error("Empty value is not allowed");
            }

            const newSearchParam = new URLSearchParams();

            Object.entries(query).forEach(([key, value]) => {
                  if (!value) return;

                  newSearchParam.set(key, value as string);
            });

            newSearchParam.set("pageNumber", STARTING_PAGE_NUMBER.toString());

            setSearchParamState(newSearchParam);
      }

      const updateSearchQuery = (query: Omit<TSearchQuery, keyof TBasicSearchQuery>) => {
            if (Object.keys(query).length <= 0) {
                  throw new Error("Empty value is not allowed");
            }

            Object.entries(query).forEach(([key, value]) => {
                  if (!value) return;

                  searchParamState.set(key, value as string);
            });

            searchParamState.set("pageNumber", STARTING_PAGE_NUMBER.toString());

            setSearchParamState(searchParamState);

      }

      const changeQueryPageNumber = (pageNumber: IBasicSearchParam["pageNumber"]) => {
            searchParamState.set("pageNumber", pageNumber.toString());

            setSearchParamState(searchParamState);
      }



      const changeQuerySortBy = <TSortBy>({ sortBy, orderBy }: { sortBy: TSortBy | "index", orderBy?: OrderBy }) => {
            setSearchParamState((prevSearchParam) => {
                  prevSearchParam.set("pageNumber", STARTING_PAGE_NUMBER.toString());

                  if (sortBy === "index") {
                        prevSearchParam.delete("sortBy");
                        prevSearchParam.delete("order");

                        return prevSearchParam;
                  }


                  const newOrderBy = prevSearchParam.get("order") === OrderBy.Ascending.toString()
                        ? OrderBy.Descending
                        : OrderBy.Ascending;


                  prevSearchParam.set("sortBy", sortBy as string);
                  prevSearchParam.set("order", orderBy ? orderBy.toString() : newOrderBy.toString());

                  return prevSearchParam;
            })
      }


      const clearAllSearchParam = ({ pageNumber }: { pageNumber?: IBasicSearchParam["pageNumber"] } = {}) => {
            const newSearchParam = new URLSearchParams();

            newSearchParam.set("pageNumber", pageNumber?.toString() ?? STARTING_PAGE_NUMBER.toString());

            setSearchParamState(newSearchParam);
      };


      const resetSearchParam = () => {
            const newSearchParam = new URLSearchParams();

            setSearchParamState(newSearchParam);
      }


      const clearSearchParam = (
            // pageNumber is not allowed to be removed.
            { removingQueryKeys }: { removingQueryKeys: Array<keyof Omit<TSearchQuery, "pageNumber">> }
      ) => {
            removingQueryKeys.forEach((key) => {
                  searchParamState.delete(key.toString());
            });

            setSearchParamState(searchParamState);
      };


      const clearSearchParamExcept = ({ notRemovingQueryKeys, pageNumber }: { notRemovingQueryKeys: Array<keyof TSearchQuery> | string[], pageNumber?: IBasicSearchParam["pageNumber"] }) => {
            const newSearchParam = new URLSearchParams();

            notRemovingQueryKeys.forEach((key) => {
                  const value = searchParamState.get(key.toString());

                  if (value)
                        newSearchParam.set(key.toString(), value);
            });

            newSearchParam.set("pageNumber", pageNumber?.toString() ?? STARTING_PAGE_NUMBER.toString());

            setSearchParamState(newSearchParam);
      };



      return {
            getSearchParmaValues: useURLQueryValues,
            changeSearchQuery,
            updateSearchQuery,
            changeQueryPageNumber,
            changeQuerySortBy,
            clearAllSearchParam,
            clearSearchParam,
            clearSearchParamExcept,
            resetSearchParam,
      } as const;
}

export default useURLQueryHandler;