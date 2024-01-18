

function getMonth(dateString: string) {
      const fullDate = new Date(dateString);

      const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' });

      return formatter.format(fullDate);
}

export default getMonth