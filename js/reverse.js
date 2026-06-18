let num=alert("Enter an array")
let input=prompt("Enter elements separated by space")
let arr=input.split(" ")
let reverse=[]
for (let i = arr.length-1; i >=0; i--) {
    reverse.push(arr[i])
}
console.log(arr)
document.write(`Your entered array is [${arr}]`)
console.log(reverse)
document.write(`Reversed array is [${reverse}]`)