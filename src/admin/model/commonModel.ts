/**
 * @interface
 * Represent table header detail
 * 
 * @property {string} id - header id.
 * @property {Array<any>} allowedRoles - list of role that have access. Optional.
 * @property {string} title - column title.
 * @property {string} className - table header extra className. Optional.
 */
export interface ITableHeaderData {
      id: string;
      allowedRoles?: any[];
      title: string;
      sortValue?: string;
      className?: React.HTMLAttributes<HTMLTableCellElement>["className"];
}


/**
 * @type
 * Represent list of table header data.
 */
export type ITableHeaderDataList = ITableHeaderData[];



/**
 * @interface
 * Represent sortDetail get functions.
 */
export interface ISortDetail<TSortBy, TOrderBy> {
      getSort: () => TSortBy,
      getOrderBy: () => TOrderBy,
}

