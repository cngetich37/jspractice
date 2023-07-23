// our_numbers array
let our_numbers = [5,8,2,7,1,4];

// filter function filter the array with a condition
my_even_numbers = our_numbers.filter((n) => n%2 == 0)
                            // map function maps the each element to the condition (n + 1)
                            .map((n) => n + 1)
                            // reduce function gives only one output
                            // it gives the sum of all the elements
                            .reduce((a,b) => a+b);
// output the result
console.log(my_even_numbers)