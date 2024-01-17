
export const ALLOWED_IMAGE_FILE = [
      'image/jpeg',
      'image/png',
      // 'image/bmp',
      'image/webp',
      // 'image/tiff',
      // 'image/avif',
      'image/svg+xml',
      // 'image/x-icon',
]



export const ALLOWED_FILE_TYPE = [
      ...ALLOWED_IMAGE_FILE,
      'application/zip',
      'application/x-7z-compresssed',
      'application/x-rar-compressed',
      "application/pdf",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];


/**
 * it  contains the file types that can be opened in a browser tab.
 */
export const BROWSER_CAN_OPEN = [
      'image/jpeg',
      'image/png',
      'image/bmp',
      'image/webp',
      'image/tiff',
      'image/avif',
      'image/svg+xml',
      'image/x-icon',
      'application/pdf',
];


/**
 * Represent files size limit in mail
 * 
 * size limit is 25MB
 */
export const FILE_SIZE_LIMIT = 25;