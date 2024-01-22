
/**
 * Extracts values from an array of objects based on a specified key.
 * @param {Array<any>} items - The array of objects.
 * @param {string} key - The key to extract values from each object.
 * @returns {Array<any>} - An array of extracted values.
 */
export const extractValue = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
      return items.map(item => item[key]).filter(Boolean) as T[K][];
};



/**
 * Assigns a value or a default value based on the truthiness of the value.
 * @param {T | undefined} value - The value to be checked.
 * @param {T} defaultValue - The default value to be used if the original value is falsy.
 * @returns {T} - The original or default value.
 */
export const assignIfTruthy = <T>(value: T | undefined, defaultValue: T): T => {
      return value || defaultValue;
};




/**
 * Gets the first file from a file detail object or returns null if no files are present.
 * @param {FileDetail} fileDetail - The file detail object.
 * @returns {File | null} - The first file or null.
 */
export interface FileDetail {
      newFiles?: File[];
}



export const getFileOrNull = (fileDetail: FileDetail): File | null => {
      return fileDetail.newFiles?.length ? fileDetail.newFiles[0] : null;
};



/**
 * Converts a value to a number if it's truthy, otherwise returns a default value.
 * @param {string | number | undefined} value - The value to be converted.
 * @param {number} defaultValue - The default value to be used if the original value is falsy.
 * @returns {number} - The converted number or the default value.
 */
export const convertToNumberIfTruthy = (value: string | number | undefined, defaultValue: number = 0): number => {
      return value ? +value : defaultValue;
};
