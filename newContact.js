// Verificar se Poossui Contatos
function verificaChildren() {
    const spanContacts = document.querySelector('.span-contacts')
    const verificarContacts = document.querySelector('.contacts-box')

    if((verificarContacts.children.length) > 1){
        spanContacts.textContent = ''
    }else {
        spanContacts.textContent = 'Você ainda não possui contatos !'    }
}
verificaChildren()
setInterval(verificaChildren, 1000)


// Botão para adicionar contatos
$('#new-button').click(function(){
    $('.newContainer').toggleClass('newActive');
});

$('.exit').click(function(){
    $('.newContainer').toggleClass('newActive');
});

// Adicionar Contatos
function adicionarContact(e){
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');

    if (firstName.value == '' || lastName.value == '' || email.value == ''){
        alert('Preencha todos os campos')
        console.log(document.querySelector('.contacts-box').children.length)
    }else{
        const contactBox = document.querySelector('.contacts-box')
        const firstNameNew = document.querySelector('#first-name').value
        const emailNew = document.querySelector('#email').value

        var contactDiv = document.createElement('div')
        var imgContact = document.createElement('div')
        var divPai = document.createElement('div')
        var div = document.createElement('div')
        var infomationsContact = document.createElement('div')
        var nameContact = document.createElement('span')
        var emailContact = document.createElement('span')
        var removeContact = document.createElement('i')
        var buttonRemove = document.createElement('button')

        contactDiv.classList.add('contact')
        divPai.classList.add('div-pai')
        removeContact.classList.add('fas')
        removeContact.classList.add('fa-times')
        buttonRemove.classList.add('remover-contatos')
        imgContact.classList.add('img-contact')
        infomationsContact.classList.add('infomations-contact')
        nameContact.classList.add('name-contact')
        emailContact.classList.add('email-contact')

        imgContact.textContent = (firstName.value.substr(0, 1)) + (lastName.value.substr(0, 1))
        nameContact.textContent = firstNameNew
        emailContact.textContent = emailNew
        

        contactBox.appendChild(contactDiv)
        contactDiv.appendChild(imgContact)
        contactDiv.appendChild(divPai)
        divPai.appendChild(infomationsContact)
        divPai.appendChild(div)
        infomationsContact.appendChild(nameContact)
        infomationsContact.appendChild(emailContact)
        div.appendChild(buttonRemove)
        buttonRemove.appendChild(removeContact)

        $('.newContainer').toggleClass('newActive');
        
        verificaChildren()
        $('.remover-contatos').click(function () {
            contactBox.removeChild();
        })
                
    }  
}

// Terminar o remove contats



