export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('en-US', {
        currency: 'ARS',
        style: 'currency',
        currencyDisplay: 'code'
    }).format(amount).replace('ARS', '').trim() + ' ARS'
}