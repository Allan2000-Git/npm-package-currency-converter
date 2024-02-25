import currencyapi from '@everapi/currencyapi-js'

const client = new currencyapi('cur_live_kpmYE8qWrGT8ksGYLUqtOWJvFLaXo767MSyDma9M')

const currencyConverter = async (fromCurrency, toCurrency, units) => {
    try {
        const response = await client.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });

        if (response.data && response.data[toCurrency]) {
            const value = await response.data[toCurrency].value;
            return value * units;
        } else {
            throw new Error('Invalid response data');
        }
    } catch (error) {
        throw new Error('Error fetching currency conversion data');
    }
}

export default currencyConverter