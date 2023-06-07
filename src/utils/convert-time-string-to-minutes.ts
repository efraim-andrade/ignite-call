export function convertTimeStringToMinutes(timeString: string) {
  const [hour, minute] = timeString.split(':').map(Number)

  return hour * 60 + minute
}
