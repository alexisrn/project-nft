
function send(){
    let email = document.querySelector('.sendEmail')
    let enviar = document.querySelector('.send')
        if (email.value.length == 0){
        window.alert('ERRO: Digite o e-mail antes de enviar.')
    } else {
        window.alert('E-mail Enviado.')
    }
}

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')
    console.log(modal);
    modal.addEventListener('click', function(evento) {
        if(evento.target.id == modalID || evento.target.className == 'btnExit'){
            modal.classList.remove('mostrar') 
        }
    });
}

const metaMask = document.querySelector('.btnMetaMask')
metaMask.addEventListener('click', function(){iniciaModal('modalMtMask')
})


