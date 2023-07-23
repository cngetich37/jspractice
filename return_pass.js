function say_hi(my_name)
{
    // use backtick notation and pass an argument
    return `hi ${my_name}`;
}


let my_name = 'collo';
let message = say_hi(my_name);


console.log(message);