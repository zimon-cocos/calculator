let firstOperand = ""
let secondOperand = ""
let operator = ""
let equationDisplay = ""
let switchVariable = 0
let total = 0
let isEqualClicked = 0
let secondaryOperationAmount = 0

function checkOperatorSwitchvar1(operator){
    switch(operator){
        case "+":
            total = parseFloat(firstOperand) + parseFloat(secondOperand)
            break;
        case "-":
            total = parseFloat(firstOperand) - parseFloat(secondOperand)
            break;
        case "*":
            total = parseFloat(firstOperand) * parseFloat(secondOperand)
            break;
        case "/":
            total = parseFloat(firstOperand) / parseFloat(secondOperand)
            break;}
    return total  
}

function checkOperatorSwitchvar2(operator){
    switch(operator){
        case "+":
            total = parseFloat(total) + parseFloat(secondOperand)
            break;
        case "-":
            total = parseFloat(total) - parseFloat(secondOperand)
            break;
        case "*":
            total = parseFloat(total) * parseFloat(secondOperand)
            break;
        case "/":
            total = parseFloat(total) / parseFloat(secondOperand)
            break;}
    return total  
}

function ClearScreen(){
    firstOperand = ""
    secondOperand = ""
    operator = ""
    switchVariable = 0
    displayText.innerText = ""
    isEqualClicked = 0
    secondaryOperationAmount = 0
    }

const displayText = document.getElementById("displayText")
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
displayText.textContent = equationDisplay

equalsBtn.addEventListener("click",e=>{
    if(isEqualClicked == 0 ){
        if(switchVariable == 1){
            displayText.textContent = checkOperatorSwitchvar1(operator)
        }
        else{
            displayText.textContent = checkOperatorSwitchvar2(operator)
            isEqualClicked++
            console.log("Equal si clickol")
        }
    }
    else{
        displayText.textContent = checkOperatorSwitchvar2(operator)
        secondOperand = ""
        secondaryOperationAmount = 0
        }
})

clearBtn.addEventListener("click",e=>{
    ClearScreen()

})

addBtn.addEventListener("click",e=>{
    if(isEqualClicked == 0){
        if(switchVariable == 0){
         switchVariable += 1
         operator = "+" 
         displayText.textContent += equationDisplay + "+"
     }
        else if(switchVariable == 1){
        switchVariable += 1
        checkOperatorSwitchvar1(operator)
        operator = "+" 
        secondOperand = ""
        displayText.textContent += equationDisplay + "+" + secondOperand
     }
        else if(switchVariable > 1){
        console.log("total je " + parseFloat(secondOperand) +" a " + total)
        checkOperatorSwitchvar2(operator)
        operator = "+" 
        secondOperand = ""
        displayText.textContent += equationDisplay + "+" + secondOperand
     }   
    }
    else if(secondaryOperationAmount == 0){
        operator = "+"
        displayText.textContent += equationDisplay + "+"
        secondaryOperationAmount++
        secondOperand = ""
    }
    else{
        checkOperatorSwitchvar2(operator)
        operator = "+"
        displayText.textContent += equationDisplay + "+"
        secondOperand = ""
    }
})

subtractBtn.addEventListener("click",e=>{
    if(isEqualClicked == 0){
        if(switchVariable == 0){
        switchVariable += 1
        operator = "-" 
        displayText.innerText += equationDisplay + "-"
     }
     else if(switchVariable == 1){
        switchVariable += 1
        checkOperatorSwitchvar1(operator) 
        operator = "-" 
        secondOperand = ""
        displayText.textContent += equationDisplay + "-" + secondOperand
     }
        else if(switchVariable > 1){
        console.log("total je " + total +" a -" + parseFloat(secondOperand))
        checkOperatorSwitchvar2(operator)
        operator = "-" 
        secondOperand = ""
        displayText.textContent += equationDisplay + "-" + secondOperand
    }    
    }
    else if(secondaryOperationAmount == 0){
        operator = "-"
        displayText.textContent += equationDisplay + "-"
        secondaryOperationAmount++
        secondOperand = ""
    }
    else{
        checkOperatorSwitchvar2(operator)
        operator = "-"
        displayText.textContent += equationDisplay + "-"
        secondOperand = ""
    }
})

multiplyBtn.addEventListener("click",e=>{
    if(isEqualClicked == 0){
        if(switchVariable == 0){
        switchVariable += 1
        operator = "*" 
        displayText.innerText += equationDisplay + "*"}
        else if(switchVariable == 1){
            switchVariable += 1
            checkOperatorSwitchvar1(operator)
            operator = "*" 
            secondOperand = ""
            displayText.innerText += equationDisplay + "*" + secondOperand
        }
     else if(switchVariable > 1){
        checkOperatorSwitchvar2(operator)
        operator = "*" 
        secondOperand = ""
        console.log("total var2 je " + total)
        displayText.textContent += equationDisplay + "*" + secondOperand
        }
    }
    else if(secondaryOperationAmount == 0){
        operator = "*"
        displayText.textContent += equationDisplay + "*"
        secondaryOperationAmount++
        secondOperand = ""
    }
    else{
        checkOperatorSwitchvar2(operator)
        operator = "*"
        displayText.textContent += equationDisplay + "*"
        secondOperand = ""
    }
})

divideBtn.addEventListener("click",e=>{
    if(isEqualClicked == 0){
     if(switchVariable == 0){
        switchVariable += 1
        operator = "/" 
        displayText.innerText += equationDisplay + "÷"}
     else if(switchVariable == 1){
            switchVariable += 1
            checkOperatorSwitchvar1(operator)
            operator = "/" 
            secondOperand = ""
            displayText.innerText += equationDisplay + "÷" + secondOperand
        }
     else if(switchVariable > 1){
        checkOperatorSwitchvar2(operator)
        operator = "/" 
        secondOperand = ""
        displayText.textContent += equationDisplay + "÷" + secondOperand
        } 
    }
    else if(secondaryOperationAmount == 0){
        operator = "/"
        displayText.textContent += equationDisplay + "/"
        secondaryOperationAmount++
        secondOperand = ""
    }
    else{
        checkOperatorSwitchvar2(operator)
        operator = "/"
        displayText.textContent += equationDisplay + "/"
        secondOperand = ""
    }
})

button0.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "0"
        displayText.innerText += equationDisplay + "0"     
    }
    else{
        secondOperand += "0"
        displayText.innerText += equationDisplay + "0"
    }
})

button1.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "1"
        displayText.innerText += equationDisplay + "1"            
    }
    else{
        secondOperand += "1"
        displayText.innerText += equationDisplay + "1"
    }
})

button2.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "2"      
        displayText.innerText += equationDisplay + "2" 
    }   
    else{
        secondOperand += "2"
        displayText.innerText += equationDisplay + "2"
    }
})

button3.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "3"      
        displayText.innerText += equationDisplay + "3" 
    }   
    else{
        secondOperand += "3"
        displayText.innerText += equationDisplay + "3"
    }
})

button4.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "4" 
        displayText.innerText += equationDisplay + "4"    
    }   
    else{
        secondOperand += "4"
        displayText.innerText += equationDisplay + "4"
    }
})

button5.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "5"   
        displayText.innerText += equationDisplay + "5" 
    }   
    else{
        secondOperand += "5"
        displayText.innerText += equationDisplay + "5"
    }
})

button6.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "6"  
        displayText.innerText += equationDisplay + "6" 
    }   
    else{
        secondOperand += "6"
        displayText.innerText += equationDisplay + "6"
    }
})

button7.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "7"  
        displayText.innerText += equationDisplay + "7" 
    }   
    else{
        secondOperand += "7"
        displayText.innerText += equationDisplay + "7"
    }
})

button8.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "8"    
        displayText.innerText += equationDisplay + "8" 
    }   
    else{
        secondOperand += "8"
        displayText.innerText += equationDisplay + "8"
    }
})

button9.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "9"   
        displayText.innerText += equationDisplay + "9" 
    }   
    else{
        secondOperand += "9"
        displayText.innerText += equationDisplay + "9"
    }
})

