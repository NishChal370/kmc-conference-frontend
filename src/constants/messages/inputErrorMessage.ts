

export const INPUT_ERROR_MESSAGE = {
      empty: "Cannot be empty",
      invalidPassword: "Should have 8 character with one upper letter, one lower letter, one special character and one number",
      passwordNotMatched: "Password doesn't match",
      invalidContactNumber: "Invalid number",
      invalidEmail: "Invalid email address",
      invalidDob: "Please enter a valid date of birth",
      invalidUrl: "Invalid url/link",
      invalidPreferredSessionLength: "Should be between 5 to 120 minutes",
      invalidStartTime: "Start time must be before end time.",
      invalidEndTime: "End time must be after start time.",
      invalidPlusCodeLength: "Cannot be bigger than 20 characters.",
} as const;