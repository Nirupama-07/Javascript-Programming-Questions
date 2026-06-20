let marks=parseInt(prompt("Enter your marks"))

if (marks>90) {
    console.log("A+")
    document.write("A+")
}else if(marks>=80){
    console.log("A")
    document.write("A")
}else if(marks>=70){
    console.log("B")
    document.write("B")
}else if(marks>=60){
    console.log("C")
    document.write("C")
}else if(marks>=50){
    console.log("D")
    document.write("D")
}else if(marks>=40){
    console.log("E")
    document.write("E")
}else{
    console.log("F")
    document.write("F")
}