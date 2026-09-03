let numeroActual='0'
let operador =''
let operando = ''

// consultando un elemento ala vez
const inputDisplay=document.querySelector('#inputDisplay')
// console.log({inputDisplay})
// consultar multiplos elementos a la vez

const buttons =document.querySelectorAll('.button')
console.log(buttons)

//EVENTOS

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        //console.log('Hice click',event.target)
        const buttonText=event.target.textContent
        
         if('+-*'.includes(buttonText)){
            operador=buttonText
            operando = Number(numeroActual)
            numeroActual='0'
         }else if (buttonText==='='){
            if (operador==='+'){
                numeroActual=Number(operando)+Number(numeroActual)
            }
            if (operador==='-'){
                numeroActual=Number(operando)-Number(numeroActual)
            }
            if(operador==='*'){
                numeroActual=Number(operando)*Number(numeroActual)
            }
        
         } else if(buttonText=== 'CE'){
           numeroActual='0'
           operador=''
           operando=''
         } else{
            numeroActual=Number(numeroActual+buttonText)
         }
        inputDisplay.value=numeroActual
       // console.log(buttonText)
    })
})