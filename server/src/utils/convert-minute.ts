/**
 * Convert Minutes (Int) to Hour (String)
 *
 * @param minutesAmount {Number}
 * @returns (minutes / 60)
 */
export function convertMinutesToHour(minutesAmount: number): string {
  const hours = Math.floor(minutesAmount / 60);
  const minutes = minutesAmount % 60;
  const formattedHours = String(hours).padStart(2, '0'); // 5 => 05
  const formattedString = String(minutes).padStart(2, '0'); // 3 => 05:03

  return `${formattedHours}:${formattedString}`;
}
