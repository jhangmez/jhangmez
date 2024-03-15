export const displayDate = (date: Date | null): string => {
  return date ? date.toISOString().split('T')[0] : ''
}