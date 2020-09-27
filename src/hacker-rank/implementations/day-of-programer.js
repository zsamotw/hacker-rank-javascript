function dayOfProgrammer(year) {
  const isLeapYear = year => {
    if (year < 1918) {
      return year % 4 === 0
    } else {
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    }
  }

  if (year === 1918) {
    return ``
  } else {
    const isLeap = isLeapYear(year)
    return isLeap ? `12.09.${year}` : `13:09${year}`
  }
}

module.exports = dayOfProgrammer