
interface IGetIndex {
      currentPageNumber: number,
      index: number,
}

/**
 * Responsible for providing table index.
 * 
 * @param currentPageNumber - page number user is in.
 * @param index - index of data. 
 * @returns table index
 */
function getIndex({ currentPageNumber, index }: IGetIndex) {

      if (currentPageNumber <= 1) return index + 1;

      if (currentPageNumber >= 2) return (10 * currentPageNumber - 10) + index + 1;
}

export default getIndex


