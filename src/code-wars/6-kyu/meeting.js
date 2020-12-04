function meeting(data) {
  function compare(person1, person2) {
    const [name1, surname1] = person1.map(i => i.toUpperCase())
    const [name2, surname2] = person2.map(i => i.toUpperCase())

    if (surname1 > surname2) {
      return 1
    } else if (surname1 < surname2) {
      return -1
    } else {
      if (name1 > name2) {
        return 1
      } else if (name1 < name2) {
        return -1
      } else {
        return 0
      }
    }
  }

  function flipToString(person) {
    const [name, surname] = person
    return `(${surname.toUpperCase()}, ${name.toUpperCase()})`
  }

  return data
    .split(';')
    .map(item => item.split(':'))
    .sort(compare)
    .map(flipToString)
    .join('')
}

module.exports = meeting
