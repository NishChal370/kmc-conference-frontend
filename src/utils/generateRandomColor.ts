
function generateRandomColor() {
  // Generate a random number between 0 and 16777215
  const randomNumber = Math.floor(Math.random() * 16777215);

  // Convert the random number to a hexadecimal string
  const hexString = randomNumber.toString(16);

  // Prepend "0" characters to the string until it has 6 digits
  const paddedHexString = ("000000" + hexString).slice(-6);

  // Prepend a "#" to the padded hexadecimal string to create a valid color code
  const colorCode = "#" + paddedHexString;

  // Return the color code
  return colorCode;
}

export default generateRandomColor