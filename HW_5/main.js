/* 1 */

function getAverage(...number) {  
    const num = number.filter(Number.isInteger); 
    return num.reduce((prev, item) =>  (prev+ item)) / num.length;  
  }
   console.log(`getRandomArray(15, 1, 100) = ${getRandomArray(15, 1, 100)}`)

   /* 2 */
   
   function getRandomArray(size, min, max) { 
    if (!Number.isInteger(size) || !Number.isInteger(min) || !Number.isInteger(max)){  
      return 'Спробуйте ще раз' 
    } 
    let randomArray = [size]; 
    for(let i=0; i<size; i++) 
     randomArray[i]= Math.floor(Math.random()*(max-min)+min); 
    return randomArray; 
   };
 console.log(`getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) = ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}`)

 /* 3 */
function getDevideFiveNumbers(...numbers) {  
    const num = numbers.filter(Number.isInteger);  
    if (Number.isNaN(num)){  
      return 'Відсутні цілі числа'  
    } 
    const devideFive = [];  
  for (let i = 0; i < numbers.length; i++) {  
    if (numbers[i] % 5 === 0) {  
      devideFive.push(numbers[i]);  
    }  
  }  
  return devideFive  
  }  
  console.log(`getDevideFiveNumbers(1, 2, 3, 4, 5, 6)} = ${getDevideFiveNumbers(1, 2, 3, 4, 5, 6)}`)

/* 4 */

function countPositiveNumbers(...numbers){ 
    const num = numbers.filter(Number.isInteger);   
    if (Number.isNaN(num)){   
      return 'Відсутні цілі числа'   
    }  
    const positiveNumber = []; 
    for(let i = 0; i < num.length; i++){ 
      if(Math.sign(num[i]) === 1 ){ 
        positiveNumber.push(num[i]) 
      } 
    } 
      return positiveNumber.length 
  }
  console.log(`countPositiveNumbers(1, -2, 3, -4, -5, 6) = ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}`)

  /* 5 */

function countNotEvenNumbers(...numbers){ 
    const num = numbers.filter(Number.isInteger);   
    if (Number.isNaN(num)){   
      return 'Відсутні цілі числа'   
    }  
    const notEvenNumbers = []; 
    for(let i = 0; i < num.length; i++){ 
      if(num[i] % 2 !== 0 ){ 
        notEvenNumbers.push(num[i]) 
      } 
    } 
      return notEvenNumbers 
  }

  console.log(`countNotEvenNumbers(1, 2, 3, 4, 5, 6) = ${countNotEvenNumbers(1, 2, 3, 4, 5, 6)}`)

 /* 6 */

function divideByThree(str) { 
  str = str.replace(/\s/g, '').toLowerCase() 
  return str.match(/.{1,3}/g); 
}

console.log(`divideByThree ('Commander') = ${divideByThree('Commander')}`)

