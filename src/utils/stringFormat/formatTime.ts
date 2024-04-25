export function formatTime(time: string) {
      const [hours, minutes] = time.split(":");
      const seconds = "00"; // Assuming you want to set seconds to "00"

      return `${hours}:${minutes}:${seconds}`;
}


export function extractTimeFromISO(dateTimeString: string) {
      // Parse the string into a Date object
      const date = new Date(dateTimeString);

      // Get hours, minutes, and seconds in UTC
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

      // Format and return the time as HH:mm:ss.sss
      return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}