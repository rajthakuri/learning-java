 //this is my first javascript code
 //variables
 console.log('hello world this is Raj');

 let firstname = 'raj';
 console.log(firstname);

 //constants
  let intrestRate = 7;
  intrestRate = 2;
  console.log(intrestRate);

 //if you need to change value then use onstant for instance

  const interest_rate = 3;
  //interest_rate = 4;
  console.log(interest_rate);
  //this will show error in console because we cannnot change the constant value
  
  //primitive value types
 let firts_namre = 'sujeena'; //string literal
 let age = 18; //number literal
 let is_clicked = true; //boolean literal
 let  last_name= undefined;
 let colour_picked = null

 //dynamic typing
 //we can change the value that is assigned previously in the program
 
 //reference types{ objectts, functions, array
 //object

 let person = {
    firts_NAME: 'shafal',
    age_ofsafal : 17
};
// to change the value in oblect we have two methods i.e {dot notation, bracket notation}
//dot notation
person.firts_NAME = 'sujeena';

//bracket notaion
let selection = firts_namre;
 
person[selection]= 'simran';

console.log(person.firts_NAME);

//arrays
let selectedcolor = ['blue', 'green'];
selectedcolor[2]= 'raj';
console.log(selectedcolor);
console.log(selectedcolor[2]);
console.log(selectedcolor.length)

//function

function greetings(x, lastnaem){
    console.log('hello ' + x +' '+ lastnaem);
}
greetings('raj' , 'shahi');

//calculating
function square(numbers){
    return numbers*numbers

};
console.log(square(8));
 