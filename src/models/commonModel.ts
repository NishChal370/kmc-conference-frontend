import { OrderBy, Status } from "@/enum/commonEnum";

/**
 * @interface
 * Represent Api  Error, problem detail.
 * 
 * @property {string} detail - detail info of error.
 * @property {number} status - api network status.
 * @property {string} title - error type.
 * @property {string} type- type of error.
 * @property {string} traceId- traceId of error.
 */
export interface IApiErrorDetail {
      detail: string,
      status: number,
      title: string,
      type: string,
      traceId: string,
}




/**
 * @interface
 * Represent api basic response
 * 
 * @property {number} totalPage - total number of pages.
 */
export interface IBasicApiResponse {
      totalPages: number
}


/**
 * @interface
 * Represent Slice basic state
 * 
 * @property {boolean} isToRefetch - it helps to forcefully refetch data. Note: it don't matter that value is true or false. but its value should be changed to trigger refetch. Optional
 * @property {Status} status - represent api status
 * @property {IApiErrorDetail} error - represent api error detail.
 */
export interface IBasicSliceState<TErrorDetail = IApiErrorDetail> {
      isToRefetch?: boolean;
      status: Status;
      error?: TErrorDetail;
}



/**
 * @interface
 * Represent api basic search param
 * 
 * @property {number} pageNumber - page number.
 * @property {TSortBy} sortBy - sort by. Generic.
 * @property {OrderBy}orderBy - order by.
 */
export interface IBasicSearchParam<TSortBy = undefined> {
      pageNumber: number;
      sortBy?: TSortBy;
      orderBy?: OrderBy;
}

