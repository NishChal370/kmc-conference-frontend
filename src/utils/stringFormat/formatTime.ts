export function formatTime(time: string) {
      const [hours, minutes] = time.split(":");
      const seconds = "00"; // Assuming you want to set seconds to "00"

      return `${hours}:${minutes}:${seconds}`;
}