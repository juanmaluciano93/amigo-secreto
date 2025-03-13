let amigos = [];

const listaAmigos = document.getElementById('listaAmigos');
const mostrarAmigoSorteado = document.getElementById('resultado');

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;
    if (amigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        amigos.push(amigo);
        limpiarCaja();
        almacenarNombres();
    }
}

function limpiarCaja () {
    document.querySelector('#amigo').value = '';
}

function almacenarNombres () {
    listaAmigos.innerHTML = '';
    
    mostrarAmigoSorteado.innerHTML= '';

    for(let i = 0; i < amigos.length; i++) {
        let amigoAgregado = document.createElement('li');
        amigoAgregado.textContent = amigos[i];
        listaAmigos.appendChild(amigoAgregado);
    }
}