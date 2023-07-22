// the variable first_num
let first_num = 0
// the array my_numbers
let my_numbers = [2,9,1,5,8,10,34];

// using the for Each loop with arrow function to iterate over the array(my_numbers)
//  (i) displays the index of each element in the array(my_numbers)
//  (n) displays the elements in the array(my_numbers)
my_numbers.forEach((n,i) =>{
    console.log(n,i);
})



// using the forEach loop without an arrow function to iterate over the array(my_numbers)
console.log("Iterate Without the Use of an Arrow Function")

my_numbers.forEach(myFunc);

function myFunc(item){
    console.log(item);
}