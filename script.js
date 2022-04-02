const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".button")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percent = document.querySelector('.percent')
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let opNum = ''


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}


const inputNumber = (number) => {
    if (currentNumber ==='0'){
        currentNumber = number
    } else {
        currentNumber += number
    }
    console.log(currentNumber)
}

function resetBtn(){
    operators.forEach((operator) => {
        operator.classList.remove('active');
    })
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event)=> {
        resetBtn()
        console.log(event.target.value)
        operator.classList.add("active")
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ' '
}

equalSign.addEventListener("click", () => {
    resetBtn()
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = prevNumber - currentNumber
            break
        case '*':
            result = prevNumber * currentNumber
            break
        case '/':
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result;
    calculationOperator = ''
}

clearBtn.addEventListener("click", () => {
    allClear()
    resetBtn()
    updateScreen(currentNumber)
})

const allClear = ()=> {
    currentNumber = '0'
    prevNumber = ''
    calculationOperator = ''
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    } else {
    currentNumber += dot
}}

percent.addEventListener('click', (event)=>{
    //console.log(event.target.value);
    currentNumber /= 100
    updateScreen(currentNumber)
})
