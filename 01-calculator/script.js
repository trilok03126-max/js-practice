function add(a,b){
  return a+b;
}

function subtract(a,b){
  return a-b;
}

function multiply(a,b){
  return a*b; 
}

function divide(a,b){
  if(b==0){ return "cannot divide by zero;"}
  return a/b;
}

console.log("Add 5+3 =", add(5,3));
console.log("subtract 10-4 =", subtract(10,4));
console.log("multiply 4*7 =", multiply(4,7));
console.log("divide 13 / 4 = ",divide(13,4));
console.log("Divide 2/0 = ",divide(2,0));