/**
 * Convert Hour to Minutes
 *
 * @param hour {String}
 * @returns (hours * 60) + minutes
 */
export function convertHourStringToMinutes(hour: String): number {
  const [hours, minutes] = hour.split(':').map(Number); //'18:00' => [18,00] (Number/Int)
  const minutesAmount = (hours * 60) + minutes;
  return minutesAmount;
}
