let num1=parseInt(prompt("Enter first number"))
let num2=parseInt(prompt("Enter second number"))

let choice=prompt("Enter the operation you want to continue(+,-,/,*,%)")

switch (choice) {
    case '+':
        console.log(num1+num2)
        document.write(num1+num2)
        break;
    case '-':
        console.log(num1-num2)
        document.write(num1-num2)
        break;
    case '*':
        console.log(num1*num2)
        document.write(num1*num2)
        break;
    case '/':
        console.log(num1/num2)
        document.write(num1/num2)
        break;
    case '%':
        console.log(num1%num2)
        document.write(num1%num2)
        break;
    default:
        console.log("Enter a valid operation")
        break;
}