//Let's say i want to call a function to add two numbers

const sum = (a,b)=>{
  return (a+b)
}

let a = 12;
let b = '6';
let c = 6;

//now if i run this , i will get 126 as output as 6 is string . As a user is very unpredictable , there is a chance that you can get a string as input. TypeScript warns you here that  there is a chance that any other datatype. 

console.log(sum(a,b));

//TypeScript way of declaring this function

const add = (a:number,b:number):number{
  return (a+b);
}

add(a,b); //This will throw an error as b is a string and not a number
add(a,c);

//Thus Now in the  method signature , a and b are declared as  numbers , also the return type of the function is also declared as a number so we make sure that the function doesn't perform concatenation.



