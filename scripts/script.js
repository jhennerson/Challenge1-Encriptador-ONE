const textoInserido = document.querySelector('.campo-texto-inserido')
const textoModificado = document.querySelector('.campo-texto-modificado')
const textoVazio = document.querySelector('.texto-vazio')
const arrayBotoes = document.querySelectorAll('.botao')

for(objBotaoClick of arrayBotoes) {
    let btValor = objBotaoClick.value
    if (btValor == "Criptografar") {
        objBotaoClick.addEventListener('click', btCriptografar)
    } else if (btValor == "Descriptografar") {
        objBotaoClick.addEventListener('click', btDescriptografar)
    } else if (btValor == "Copiar") {
        objBotaoClick.addEventListener('click', copiarTexto)
    }    
}

function btCriptografar() {
    const textoCriptografado = criptografar(textoInserido.value)
    textoModificado.value = textoCriptografado
    if(textoInserido.value) {
        textoModificado.style.backgroundImage = "none"
        textoModificado.style.display = "block"
        textoModificado.style.height = "150%"
        textoVazio.style.display = "none"
        document.getElementById('apresentacao').setAttribute('style', 'justify-content:space-between')
        document.getElementById('bt-copiar').setAttribute('style', 'display:block')
    }    
}

function criptografar(textoCriptografado) {
    let matrizTexto = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoCriptografado = textoCriptografado.toLowerCase()
    
    for(let i = 0; i < matrizTexto.length; i++) {
        if(textoCriptografado.includes(matrizTexto[i][0])) {
            textoCriptografado = textoCriptografado.replaceAll(matrizTexto[i][0], matrizTexto[i][1])
        }
    }

    return textoCriptografado
}

function btDescriptografar() {
    const textoDescriptografado = descriptografar(textoInserido.value)
    textoModificado.value = textoDescriptografado
    if(textoInserido.value) {
        textoModificado.style.backgroundImage = "none"
        textoVazio.style.display = "none"
        document.getElementById('bt-copiar').setAttribute('style', 'display:block')
    }    
}

function descriptografar(textoDescriptografado) {
    let matrizTexto = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    textoDescriptografado = textoDescriptografado.toLowerCase()

    for(let i = 0; i < matrizTexto.length; i++) {
        if(textoDescriptografado.includes(matrizTexto[i][0])) {
            textoDescriptografado = textoDescriptografado.replaceAll(matrizTexto[i][0], matrizTexto[i][1])
        }
    }

    return textoDescriptografado
}

function copiarTexto() {
    let areaDeTransferencia = textoModificado
    areaDeTransferencia.select()
    navigator.clipboard.writeText(areaDeTransferencia.value)
    alert("Texto copiado para a área de transferência!")
}