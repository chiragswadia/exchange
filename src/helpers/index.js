
export const calculateExchangeRate = ({ sourceCurrency, destinationCurrency, rates }) => {
    const sourceCurrencyRate = rates[sourceCurrency];
    const destinationCurrencyRate = rates[destinationCurrency];
  
    if (!sourceCurrencyRate || !destinationCurrencyRate) {
      return;
    }
  
    return destinationCurrencyRate / sourceCurrencyRate;
};