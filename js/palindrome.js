let num=prompt("Enter a number")
let arr=num.split("").map(Number)
console.log(arr)
let isPalindrome = true
for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        isPalindrome = false
        break
    }
}
if (isPalindrome) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}