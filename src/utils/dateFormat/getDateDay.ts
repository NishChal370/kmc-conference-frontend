
function getDateDay(dateString: string) {
      const fullDate = new Date(dateString);

      const formatter = new Intl.DateTimeFormat('en-US', { day: 'numeric' });

      const day = +formatter.format(fullDate)

      return day < 10 ? ("0" + day) : day;
}

export default getDateDay