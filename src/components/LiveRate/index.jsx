import React from 'react';
import PropTypes from 'prop-types';
import FormattedCurrency from '../FormattedCurrency';

import cn from './styles.module.css';

const LiveRate = ({ sourceCurrency, destinationCurrency, rate }) => {
    return (
        <div className={cn.root} data-testid="live-rate">
            <span className={cn.liveRateIndicator}></span>
            <FormattedCurrency currency={sourceCurrency} value={1} precision={0} />
            {' = '}
            <FormattedCurrency currency={destinationCurrency} value={rate} />
        </div>
    )
}

LiveRate.propTypes = {
    sourceCurrency: PropTypes.string.isRequired,
    destinationCurrency: PropTypes.string.isRequired,
    rate: PropTypes.number,
}

export default LiveRate;