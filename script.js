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
let firstOperand = ""
let secondOperand = ""
let operator = ""
let switchVariable = 0
let total = 0

/*let operate = function(){
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

    } */


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
const addBtn = document.getElementById("add")
const subtractBtn = document.getElementById("subtract")
const multiplyBtn = document.getElementById("multiply")
const divideBtn = document.getElementById("divide")
const equalsBtn = document.getElementById("equals")
const clearBtn = document.getElementById("clear")


equalsBtn.addEventListener("click",e=>{
    
    if(switchVariable == 2){
        displayText.textContent = total
    }
    else{
        switch(operator){
        case "+":
            console.log(`vysledok je ${parseFloat(firstOperand) + parseFloat(secondOperand)}`)
            displayText.innerText = `${parseFloat(firstOperand) + parseFloat(secondOperand)}`
            break;
        case "-":
            console.log(`vysledok je ${parseFloat(firstOperand) - parseFloat(secondOperand)}`)
            displayText.innerText = `${parseFloat(firstOperand) - parseFloat(secondOperand)}`
            break;
        case "*":
            console.log(`vysledok je ${parseFloat(firstOperand) * parseFloat(secondOperand)}`)
            displayText.innerText = `${parseFloat(firstOperand) * parseFloat(secondOperand)}`
            break;
        case "/":
            console.log(`vysledok je ${parseFloat(firstOperand) / parseFloat(secondOperand)}`)
            displayText.innerText = `${parseFloat(firstOperand) / parseFloat(secondOperand)}`

    }    
    }
    

})

clearBtn.addEventListener("click",e=>{
    firstOperand = ""
    secondOperand = ""
    operator = ""
    switchVariable = 0
    displayText.innerText = ""
    console.log("Cleared")
})


addBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    if(switchVariable == 0){
        switchVariable += 1
        operator += "+" 
        displayText.innerText += "+"
    }
    else if(switchVariable == 1){
        switchVariable += 1
        total = parseFloat(firstOperand) + parseFloat(secondOperand)
        secondOperand = ""
        console.log("total je " + total)
        displayText.inert += "+" + secondOperand
    }
    else if(switchVariable > 1){
        total = parseFloat(secondOperand) + total
        secondOperand = ""
        console.log("total var2 je " + total)
    }

    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

subtractBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    switchVariable += 1
    operator += "-"
    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

multiplyBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    switchVariable += 1
    operator += "*"
    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

divideBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    switchVariable += 1
    operator += "/"
    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})








button0.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "0"
        displayText.innerText = firstOperand
        console.log("first operator je " + firstOperand)        
    }
    else{
        secondOperand += "0"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button1.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "1"
        displayText.innerText = firstOperand
        console.log("first operator je " + firstOperand)               
    }
    else{
        secondOperand += "1"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button2.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "2"      
        displayText.innerText = firstOperand
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "2"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button3.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "3"      
        displayText.innerText = firstOperand
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "3"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button4.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "4" 
        displayText.innerText = firstOperand     
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "4"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button5.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "5"   
        displayText.innerText = firstOperand   
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "5"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button6.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "6"  
        displayText.innerText = firstOperand    
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "6"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button7.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "7"  
        displayText.innerText = firstOperand    
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "7"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button8.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "8"    
        displayText.innerText = firstOperand
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "8"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

button9.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "9"   
        displayText.innerText = firstOperand   
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "9"
        displayText.innerText = secondOperand
        console.log("second operator je " + secondOperand)
    }
})

