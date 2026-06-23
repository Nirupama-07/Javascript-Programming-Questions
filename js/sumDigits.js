let num=prompt("Enter digits")

let arr=num.split("").map(Number)
console.log(arr)
let sum=arr.reduce((acc,cur)=>
    acc+cur,0);
console.log(sum)

//.map(Number) converts each string element inside the array into a number