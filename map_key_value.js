// Map is the key value pairs
let my_student = new Map();

my_student.set('Collins', 'Computer Science');
my_student.set('Marvin', 'Business Information Technology');
my_student.set('John', 'Data Technology');

// display the keys
console.log(my_student.keys());

// display the values
console.log(my_student.values());


// iterate through the map using for loop iteration

for (let [k,v] of my_student) {
    console.log(k,":",v);
}

// iterate through the map using forEach loop iteration

my_student.forEach((v,k) => console.log(k,":",v));