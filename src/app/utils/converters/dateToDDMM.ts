export function DateToDDMM(date: Date | string | number | null): string {
  if (!date) { return '' }
  const validDate = new Date(date);
  const day = validDate.getDate();
  const month = validDate.toLocaleString('en-US', { month: 'short' });
  return `${day} ${month}`;
}