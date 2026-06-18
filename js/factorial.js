let num=parseInt(prompt("Enter a number"))
let fact=1

if(num<0){
    console.log("Number cannot be negative")
    document.write("Number cannot be negative")
}else{
    for (let i = 1; i <=num; i++) {
        fact=fact*i
    }

    console.log(`Factorial of ${num} is ${fact}`)
    document.write(`Factorial of ${num} is ${fact}`)
}