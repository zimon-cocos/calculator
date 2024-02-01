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


