

export const REGEX = {
      //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
      PASSWORD: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])(?!.*[\\'"`]).{8,}$/,

      EMAIL: /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
} as const;