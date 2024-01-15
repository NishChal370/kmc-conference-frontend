

function changeDateFormat(dateString: string, format: "short" | "medium" | "long" = "short") {
      const fullDate = new Date(dateString);

      switch (format) {
            case "short":
                  return shortDate(fullDate);

            case "medium":
                  return mediumDate(fullDate);

            case "long":
                  return longDate(fullDate);

            default:
                  break;
      }
}



/**
 * @returns date in 'YYYY-MM-DD' format 
 */
function shortDate(fullDate: Date) {
      const year = fullDate.getFullYear();

      //SEE: https://bobbyhadz.com/blog/javascript-date-getmonth-returns-wrong-month#:~:text=This%20is%20because%20the%20getMonth,add%201%20to%20the%20result.
      let month: string | number = fullDate.getMonth() + 1;
      month = month < 10 ? "0" + month : month;

      let date: string | number = fullDate.getDate();
      date = date < 10 ? "0" + date : date;

      return year + "-" + month + "-" + date;
}


/**
 * @returns date in 'September 5, 2023' format 
 */
function mediumDate(fullDate: Date) {
      return new Intl.DateTimeFormat(
            undefined,
            { dateStyle: "long" }
      ).format(fullDate);
}

/**
 * @returns date in 'Tue, September 5, 2023' format 
 */
function longDate(fullDate: Date) {
      return new Intl.DateTimeFormat(
            undefined,
            { weekday: "short" }
      ).format(fullDate) + ", " + mediumDate(fullDate)
}


export default changeDateFormat