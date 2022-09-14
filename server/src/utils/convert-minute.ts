/**
 * Convert Minutes to Hour
 *
 * @param minutesAmount {Number}
 * @returns (minutes / 60)
 */
export function convertMinutesStringToHour(minutesAmount: number): string {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  const formattedHours = String(hours).padStart(2, '0');
  const formattedString = String(minutes).padEnd(2, '0');

  return `${formattedHours}:${formattedString}`;
}
