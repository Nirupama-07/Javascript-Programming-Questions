let a=prompt("Enter a number")
b=parseInt(a)

if (b%2==0) {
    console.log("Even number")
    document.write(`${b} is even number`)
}else{
    console.log("Odd Number")
    document.write(`${b} is odd number`)
}