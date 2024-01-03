//regras do modal(object literal)
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),

  open() {
    //esta la em cima do modal
      Modal.wrapper.classList.add('open')
  },
  close() {
    //esta la em cima do modal
      Modal.wrapper.classList.remove('open')
  }
}

//esta la em cima do modal, só funciona nesse evento, em outros não
Modal.buttonClose.onclick = () => {
  Modal.close()
}

//window é variavel global(keydown é tecla digitada)
window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        Modal.close()
    }
}