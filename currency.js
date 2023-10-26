        const exchangeRates = {
            USD: { EUR: 0.94, GBP: 0.82, PKR: 276.49 },
            EUR: { USD: 1.06, GBP: 0.87, PKR: 292.75 },
            GBP: { USD: 1.22, EUR: 1.15, PKR: 336.05 },
            PKR: { USD: 0.0036, EUR: 0.0034, GBP: 0.0030 }
        };

        function convertCurrency() {
            const amount = parseFloat(document.getElementById('amount').value);
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;

            const conversionRate = exchangeRates[fromCurrency][toCurrency];
            const result = amount * conversionRate;

            document.getElementById('result').textContent = result.toFixed(2) + ' ' + toCurrency;
        }

        function swapCurrencies() {
            const fromCurrency = document.getElementById('fromCurrency').value;
            const toCurrency = document.getElementById('toCurrency').value;

            document.getElementById('fromCurrency').value = toCurrency;
            document.getElementById('toCurrency').value = fromCurrency;

            convertCurrency();
        }

        document.getElementById('convertButton').addEventListener('click', convertCurrency);
        document.getElementById('swapButton').addEventListener('click', swapCurrencies);

        // Initial conversion
        convertCurrency();