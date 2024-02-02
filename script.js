const add = function(a,b){
    return a+b
}

const subtract = function(a,b){
    return a-b
}

const multiply = function(a,b){
    return a*b
}

const divide = function(a,b){
    return a/b
}

let a = 0
let b = 0
const operators = ["+","-","*","/"]
let firstOperator = ""
let secondOperator = ""
let operand = ""

let operate = function(){
    let a = parseFloat(prompt("daj cislo 1"))
    let b = parseFloat(prompt("daj cislo 2"))
    let operator = prompt("daj +,-,* alebo /")
    switch(operator){
        case "+":
            return add(a,b)
            break
        case "-":
            return subtract(a,b)
            break
        case "*":
            return multiply(a,b)
            break
        case "/":
            return divide(a,b)
            break

        default:
        return("dal si daco ine ako operator")    
        }

    }


const displayText = document.getElementById("displayText")
displayText.innerText = "WHAAAAAAAAAAAT"

const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")

button0.addEventListener("click", e=>{
    firstOperator += "0"
    console.log(firstOperator)
})

button1.addEventListener("click", e=>{
    firstOperator += "1"
    console.log(firstOperator)
})

button2.addEventListener("click", e=>{
    firstOperator += "2"
    console.log(firstOperator)
})

button3.addEventListener("click", e=>{
    firstOperator += "3"
    console.log(firstOperator)
})

button4.addEventListener("click", e=>{
    firstOperator += "4"
    console.log(firstOperator)
})

button5.addEventListener("click", e=>{
    firstOperator += "5"
    console.log(firstOperator)
})

button6.addEventListener("click", e=>{
    firstOperator += "6"
    console.log(firstOperator)
})

button7.addEventListener("click", e=>{
    firstOperator += "7"
    console.log(firstOperator)
})

button8.addEventListener("click", e=>{
    firstOperator += "8"
    console.log(firstOperator)
})

button9.addEventListener("click", e=>{
    firstOperator += "9"
    console.log(firstOperator)
})

