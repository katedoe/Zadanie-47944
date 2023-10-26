let num1 = 2;
let num2 = 5;

function more(arg1, arg2) {
    if (arg1 == arg2) {
        return("liczby są równe")}
    else if (arg1>arg2) {
        return(arg1)}
    else if (arg1<arg2) {
        return(arg2)}
}

console.log(more (num1, num2));