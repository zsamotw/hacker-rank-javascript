function bonAppetit(bill, k, b) {
  const vegetarianCost = bill[k]
  const onePersonCost =
    (bill.reduce((acc, el) => acc + el, 0) - vegetarianCost) / 2
  const refound = b - onePersonCost
  return refound > 0 ? refound : 'bonAppetite'
}

module.exports = bonAppetit