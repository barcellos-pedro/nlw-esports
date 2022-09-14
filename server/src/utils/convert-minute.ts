/**
 * Convert Minutes to Hour
 *
 * @param minutesAmount {Number}
 * @returns (minutes / 60)
 */
export function convertMinutesStringToHour(minutesAmount: number): string {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  const formattedHours = String(hours).padStart(2, '0'); // 5:00 => 05:00
  const formattedString = String(minutes).padStart(2, '0'); // 12:3 => 12:35

  return `${formattedHours}:${formattedString}`;
}
