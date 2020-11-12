// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof input !== "string") return "Hello, World!";
    return "Hello, " + input + "!";
}