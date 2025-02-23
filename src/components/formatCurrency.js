const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency: "USD",
    style:"currency"
})

const fromatCurrency = (number) => {
    return CURRENCY_FORMATTER.format(number)
}

export default fromatCurrency