import React from 'react';
import PropTypes from 'prop-types';
import { currencySymbolsByName } from '../../constants';

const DEFAULT_PRECISION = 2;

const FormattedCurrency = React.memo(
  ({ currency, value, precision = DEFAULT_PRECISION }) => {
    const currencySymbol = currencySymbolsByName[currency];
    const formattedValue = value.toFixed(precision);

    return (
      <span data-testid="formatted-currency">
        { currencySymbol } { formattedValue }
      </span>
    )
});

FormattedCurrency.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  precision: PropTypes.number
}

export default FormattedCurrency;
