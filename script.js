const billInput = document.querySelector('.billInput')
const five = document.querySelector('.five')
const ten = document.querySelector('.ten')
const fifteen = document.querySelector('.fifteen')
const twentyfive = document.querySelector('.twentyfive')
const fifty = document.querySelector('.fifty')
const custom = document.querySelector('.custom')
const peopleInput = document.querySelector('.peopleInput')
const tipAmount = document.querySelector('.tipAmount')
const peopleAmount = document.querySelector('.peopleAmount')
const resetBtn = document.querySelector('.resetBtn')
const billInputBox = document.querySelector('.billInputBox')
const peopleInputBox = document.querySelector('.peopleInputBox')
const billError = document.querySelector('.billError')
const customError = document.querySelector('.customError')
const peopleError = document.querySelector('.peopleError')



function checkTips(tips){

    let billInputValue = +billInput.value
    let peopleInputValue = +peopleInput.value
    let percentage = tips
     tipAmount.innerHTML = `$${(billInputValue*peopleInputValue*percentage).toFixed(2)}`
     peopleAmount.innerHTML = `$${(billInputValue*peopleInputValue).toFixed(2)}`
 
     billInput.value = ''
     peopleInput.value = ''
}

billInput.addEventListener('input', ()=>{
    if(billInput.value <= 0){
        billInputBox.classList.add('error')
        billError.classList.add('show')
    } else{
        billInputBox.classList.remove('error')
        billError.classList.remove('show')

    }
})

peopleInput.addEventListener('input', ()=>{
    if(peopleInput.value <= 0){
        peopleInputBox.classList.add('error')
        peopleError.classList.add('show')
    } else{
        peopleInputBox.classList.remove('error')
        peopleError.classList.remove('show')
        
    }
})

custom.addEventListener('input', ()=>{
    if(custom.value <= 0){
        custom.classList.add('error')
        customError.classList.add('show')
    } else{
        custom.classList.remove('error')
        customError.classList.remove('show')


        let billInputValue = +billInput.value
        let peopleInputValue = +peopleInput.value
        let customValue = +custom.value
        let percentage = customValue*0.01
         tipAmount.innerHTML = `$${(billInputValue*peopleInputValue*percentage).toFixed(2)}`
         peopleAmount.innerHTML = `$${(billInputValue*peopleInputValue).toFixed(2)}`
     
    }
})

five.addEventListener('click', ()=>{
    checkTips(0.05)
})


ten.addEventListener('click', ()=>{
    checkTips(0.10)
})


fifteen.addEventListener('click', ()=>{
    checkTips(0.15)
})


twentyfive.addEventListener('click', ()=>{
    checkTips(0.25)
})


fifty.addEventListener('click', ()=>{
checkTips(0.5)
})


resetBtn.addEventListener('click', ()=>{
    tipAmount.innerHTML = ''
    peopleAmount.innerHTML = ''
    billInput.value = ''
    peopleInput.value = ''
    custom.value = ''
})

