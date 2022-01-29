
// multiplication table with javascript (13 mulitplication table)
function multi(a) {
    for (var i = 0; i <= 10; i++){
         console.log(a * i);
        /* return a * i; */
    }
}
const result = multi(18);
console.log(result);


// problem 2 converting uppercase to lowercase
function upper_to_lower(name) {
    return name.toLowerCase();
}
const convert_name = upper_to_lower("JISAN");
console.log('after converting name = ',convert_name);



// problem 3 concatenating two strings
function add_to_string(first_name, last_name) {
    return first_name + " " + last_name;
}
const full_name = add_to_string("Mohammad", "Tanvir");
console.log(full_name);

//problem:4 square of a number

function square(a) {
    return a ** 2;
}
const result_square = square(10);
console.log(result_square);

// extracting item form an array of object
const pizza = {
    toppings: ['cheese', 'sauce', 'pepperoni'],  
    crust: 'deep dish',   
    serves: 2
}
   
const extract = pizza.toppings[2];
console.log(extract);