"use strict"
function solveEquation(a, b, c) {
  let arr = [];
   let discriminant = b*b - 4 * a * c;
  
  if (discriminant === 0) {
      let rootFirst = -b / (2 * a);
          arr.push(rootFirst);
    
  } else if (discriminant > 0) {
      let rootFirst = (-b + Math.sqrt(discriminant)) / (2 * a);
          arr.push(rootFirst);
      let rootSecond = (-b - Math.sqrt(discriminant)) / (2 * a);
          arr.push(rootSecond);
  } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
