function gerar(){
    var txtNumero = document.querySelector("input#numero")
    var numero = Number.parseInt(txtNumero.value)
    var tab = document.querySelector("select#tab")

    if (txtNumero.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            calc = numero * c
            let item = document.createElement('option')
            item.text = `${numero} X ${c} = ${calc}`
            tab.appendChild(item)
        }
    }
    
}

