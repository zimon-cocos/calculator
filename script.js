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
let equationDisplay = ""
let switchVariable = 0
let total = 0
let isEqualClicked = 0

let checkOperatorSwitchvar1 = function(operator){
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
    console.log("checkOperatorSwitchvar1 ti vyratalo total ako " + total)  
    return total  
}


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
    
    if(isEqualClicked == 0 ){
        if(switchVariable == 1){
            displayText.textContent = checkOperatorSwitchvar1(operator)
        }

        else if(switchVariable == 2 && operator == "+"){
            total = parseFloat(secondOperand) + parseFloat(total)
            displayText.textContent = total
            isEqualClicked++
            console.log("Equal si clickol")
        }
        else if(switchVariable == 2 && operator == "-"){
            total = parseFloat(total) - parseFloat(secondOperand)
            displayText.textContent = total
            console.log("Equal si clickol")
            isEqualClicked++}    
        else if(switchVariable == 2 && operator == "*"){
            total = parseFloat(total) * parseFloat(secondOperand)
            displayText.textContent = total
            console.log("Equal si clickol")
            isEqualClicked++
        }

        else if(switchVariable == 2 && operator == "/"){
            total = parseFloat(total) / parseFloat(secondOperand)
            displayText.textContent = total
            console.log("Equal si clickol")
            isEqualClicked++
        }
    }
    else{
        switchVariable = 1
        displayText.textContent = total
    }
    


})
    function ClearScreen(){
         firstOperand = ""
         secondOperand = ""
         operator = ""
         switchVariable = 0
         displayText.innerText = ""
         isEqualClicked = 0
         console.log("Cleared")    
    }
displayText.textContent = equationDisplay

clearBtn.addEventListener("click",e=>{
    ClearScreen()

})


// 20:04 uz to serem ale daj si pozor ako sa vyhodnoti equal ked si ho klikol viac ako raz, davaj pozor ako sa rata total - aby to bolo sprave, ked na toto prides, kalkulacka
//bude fungovat spravne ako to chces.

// 5.2.24 19:09 skus urobit to, ze ak je equal clicknuty viac ako raz, tak sa ukaze na displayText iba let = total, kedze ten je podla konzoly spravny
// 19:15 skus resetnut switchvar ak equal kliknes viac ako raz - ok zistil som ze to nefunguje idem pridat dalsie cisla po 9, skusim ci viacoperacne ratanie bude fungovat aj s nimi
// ak ano pridam dalsie operatory
// ak das subtract ako prve - snazis sa dat prve zaporne cislo tak ti da NaN
// 5.2 19:57 dneska sa mi iba podarilo pridat ostatne cislice, multiply asi nefunguje
// 8.2 multiply relativne funguje, kalkulacka nepozna nadradenost operatorov


addBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    console.log("Equation display: " + equationDisplay)
    if(switchVariable == 0){
        switchVariable += 1
        operator = "+" 
        displayText.textContent += equationDisplay + "+"
    }
    else if(switchVariable == 1){
        switchVariable += 1
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
        //total = parseFloat(firstOperand) + parseFloat(secondOperand)
        operator = "+" 
        secondOperand = ""
        console.log("total je " + total)
        displayText.textContent += equationDisplay + "+" + secondOperand
    }
    else if(switchVariable > 1){
        console.log("total je " + parseFloat(secondOperand) +" a " + total)
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
        //total = parseFloat(secondOperand) + total
        operator = "+" 
        secondOperand = ""
        console.log("total var2 je " + total)
        displayText.textContent += equationDisplay + "+" + secondOperand
    }

    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

subtractBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    console.log("Equation display: " + equationDisplay)
    if(switchVariable == 0){
        switchVariable += 1
        operator = "-" 
        displayText.innerText += equationDisplay + "-"
    }
    else if(switchVariable == 1){
        switchVariable += 1
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
        //total = parseFloat(firstOperand) + parseFloat(secondOperand)
        operator = "-" 
        secondOperand = ""
        console.log("total je " + total)
        displayText.textContent += equationDisplay + "-" + secondOperand
    }
    else if(switchVariable == 1){
        switchVariable += 1
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
                break;    
        }
        //total = parseFloat(firstOperand) - parseFloat(secondOperand)
        operator = "-" 
        secondOperand = ""
        console.log("total je " + total)
        displayText.innerText += equationDisplay + "-" + secondOperand
    }
    else if(switchVariable > 1){
        console.log("total je " + total +" a -" + parseFloat(secondOperand))
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
        //total = total - parseFloat(secondOperand) 
        operator = "-" 
        secondOperand = ""
        console.log("total var2 je " + total)
        displayText.textContent += equationDisplay + "-" + secondOperand
    }

    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

multiplyBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    if(switchVariable == 0){
        switchVariable += 1
        operator = "*" 
        displayText.innerText += equationDisplay + "*"}
    else if(switchVariable == 1){
            switchVariable += 1
            checkOperatorSwitchvar1(operator)
            operator = "*" 
            secondOperand = ""
            console.log("total je " + total)
            displayText.innerText += equationDisplay + "*" + secondOperand
        }
    else if(switchVariable > 1){
        console.log("total je " + parseFloat(secondOperand) +" a " + total)
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
            //total = parseFloat(secondOperand) + total
        operator = "*" 
        secondOperand = ""
        console.log("total var2 je " + total)
        displayText.textContent += equationDisplay + "*" + secondOperand
        }
    
    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})

divideBtn.addEventListener("click",e=>{
    console.log("switchvar pred je " + switchVariable)
    console.log("operand pred je " + operator)
    if(switchVariable == 0){
        switchVariable += 1
        operator = "/" 
        displayText.innerText += equationDisplay + "/"}
    else if(switchVariable == 1){
            switchVariable += 1
            checkOperatorSwitchvar1(operator)
            operator = "/" 
            secondOperand = ""
            console.log("total je " + total)
            displayText.innerText += equationDisplay + "/" + secondOperand
        }
    else if(switchVariable > 1){
        console.log("total je " + parseFloat(secondOperand) +" a " + total)
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
            //total = parseFloat(secondOperand) + total
        operator = "/" 
        secondOperand = ""
        console.log("total var2 je " + total)
        displayText.textContent += equationDisplay + "/" + secondOperand
        }
    
    console.log(switchVariable + " je switchvar")
    console.log(operator + " je operand")
})









button0.addEventListener("click", e=>{
    if(operator == "/"){
        displayText.textContent = "Delit nulou nejdes"
        setTimeout(ClearScreen, 2000)
    }
    else if(switchVariable === 0){
        firstOperand += "0"
        displayText.innerText += equationDisplay + "0"
        console.log("first operator je " + firstOperand)        
    }
    else{
        secondOperand += "0"
        displayText.innerText += equationDisplay + "0"
        console.log("second operator je " + secondOperand)
    }
})

button1.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "1"
        displayText.innerText += equationDisplay + "1"
        console.log("first operator je " + firstOperand)               
    }
    else{
        secondOperand += "1"
        displayText.innerText += equationDisplay + "1"
        console.log("second operator je " + secondOperand)
    }
})

button2.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "2"      
        displayText.innerText += equationDisplay + "2"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "2"
        displayText.innerText += equationDisplay + "2"
        console.log("second operator je " + secondOperand)
    }
})

button3.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "3"      
        displayText.innerText += equationDisplay + "3"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "3"
        displayText.innerText += equationDisplay + "3"
        console.log("second operator je " + secondOperand)
    }
})

button4.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "4" 
        displayText.innerText += equationDisplay + "4"   
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "4"
        displayText.innerText += equationDisplay + "4"
        console.log("second operator je " + secondOperand)
    }
})

button5.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "5"   
        displayText.innerText += equationDisplay + "5"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "5"
        displayText.innerText += equationDisplay + "5"
        console.log("second operator je " + secondOperand)
    }
})

button6.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "6"  
        displayText.innerText += equationDisplay + "6"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "6"
        displayText.innerText += equationDisplay + "6"
        console.log("second operator je " + secondOperand)
    }
})

button7.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "7"  
        displayText.innerText += equationDisplay + "7"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "7"
        displayText.innerText += equationDisplay + "7"
        console.log("second operator je " + secondOperand)
    }
})

button8.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "8"    
        displayText.innerText += equationDisplay + "8"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "8"
        displayText.innerText += equationDisplay + "8"
        console.log("second operator je " + secondOperand)
    }
})

button9.addEventListener("click", e=>{
    if(switchVariable === 0){
        firstOperand += "9"   
        displayText.innerText += equationDisplay + "9"
        console.log("first operator je " + firstOperand)    
    }   
    else{
        secondOperand += "9"
        displayText.innerText += equationDisplay + "9"
        console.log("second operator je " + secondOperand)
    }
})

