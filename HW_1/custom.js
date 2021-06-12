const onionPrice = 15.678;
const saloPrice = 123.965;
const breadPrice = 90.2345;

const maxPrice = Math.max(onionPrice, saloPrice, breadPrice);
console.log("Max price - " + maxPrice);

const minPrice = Math.min(onion, salo, bread);
const sumAllthings = onion + salo + bread;
const integSum = Math.trunc(onion) + Math.trunc(salo) + Math.trunc(bread);
const roundedsum = 100 * Math.round(sumAllthings / 100);
const roundingSumResult = integSum % 2 == 0;
const restAfterPayment = customerMoney - sumAllthings;
const averageAmount = sumAllthings / 3;
const discount = Math.floor(Math.random() * 60) + 10;
const priceDiscount = (sumAllthings - discount).toFixed();
const profit = (sumAllthings / 2 - discount).toFixed();