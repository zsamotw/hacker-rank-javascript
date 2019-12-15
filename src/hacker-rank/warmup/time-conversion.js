const timeConversion = s => {
  const dayPart = s.slice(s.length - 2)
  const hour = s.slice(0, 2)
  if (dayPart === 'AM' && hour === '12') {
    return '00:00:00'
  } else if (dayPart == 'PM' && hour === '12') {
    return '12:00:00'
  } else if (dayPart === 'PM') {
    const timeWithoutHour = s.slice(2, s.length - 2)
    const hourAsNumber = parseInt(hour)
    const hourIn24 = String(hourAsNumber + 12)
    return hourIn24 + timeWithoutHour
  } else {
    return s.slice(0, s.length - 2)
  }
}

module.exports = timeConversion