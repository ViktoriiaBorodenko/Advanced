const onionPrice = 15.678;
const saloPrice = 123.965;
const breadPrice = 90.2345;

const maxPrice = Math.max(onionPrice, saloPrice, breadPrice);
console.log("Max price - " + maxPrice);

const minPrice = Math.min(onionPrice, saloPrice, breadPrice);
console.log("Min price - " + minPrice);

const totalSummSnacks = onionPrice + saloPrice + breadPrice;
console.log(`Total price - ${totalSummSnacks}`);


const totalSummInteger = Math.floor(onionPrice) + Math.floor(saloPrice) + Math.floor(breadPrice);
console.log(`The sum of all delicacy - ${totalSummInteger}`);

const roundedSummSnacks = Math.round(totalSummInteger / 100) * 100;
console.log(roundedSummSnacks);

const pairedNumber = Math.floor(totalSummInteger) % 2;
console.log(totalSummInteger == 0);

const customerPay = 500;
console.log(`Rest - ${customerPay - totalSummSnacks}`);

const meanPrice = Number((totalSummSnacks / 3).toFixed(2));
console.log(`Mean Price ${meanPrice}`);

const randomDiscount = Math.trunc(Math.random() * 100);
const summDiscount = Number(totalSummSnacks * (randomDiscount / 100)).toFixed(2);
const summToPay = Number(totalSummSnacks - summDiscount).toFixed(2)
const netProfit = Number((totalSummSnacks / 2) - summDiscount).toFixed(2)
console.log(`Net profit ${netProfit}`)