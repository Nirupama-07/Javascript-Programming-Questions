let a=parseInt(prompt("Enter first number"))
let b=parseInt(prompt("Enter second number"))
let c=parseInt(prompt("Enter third number"))

if (a>=b && a>=c) {
    console.log(`${a} is greatest`)
    document.write(`${a} is greatest`)
}else if(b>=a && b>=c){
    console.log(`${b} is greatest`)
    document.write(`${b} is greatest`)
}
else{
    console.log(`${c} is greatest`)
    document.write(`${c} is greatest`)
}