import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'
// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Fechar a janela de erro ao digitar campo
//esse evento vai verificar se eu estou mudando sempre o evento
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
/* só funciona quando clicado */
form.onsubmit = event => {
    event.preventDefault()/* evite o com preventDefault, que no caso é clicar  e recarregar pagina */
    //variaveis que a pagina precisa
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)
    
    if(weightOrHeightIsNotANumber){
      AlertError.open()
      return;
    }

    AlertError.close()    
   

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  //esta la em cima do modal
    Modal.message.innerText = message
    Modal.open()

}



