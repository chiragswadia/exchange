const isValidTransaction = ({
  sourceCurrency,
  destinationCurrency,
  wallet,
  amount,
  rates,
}) => {
  if (sourceCurrency === destinationCurrency) {
    return false
  }

  if (!rates[sourceCurrency] || !rates[destinationCurrency]) {
    return false
  }

  if (!amount) {
    return false
  }

  const currentBalance = wallet[sourceCurrency]
  if (!currentBalance || currentBalance < amount) {
    return false
  }

  return true
}

export default isValidTransaction
