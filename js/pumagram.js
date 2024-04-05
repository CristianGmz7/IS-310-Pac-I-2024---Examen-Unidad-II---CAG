window.onload = cargarLS;

let contadorlikes = 0;
const btnMeGusta = document.querySelector('.like-btn');
const textoMeGusta = document.querySelector('.like-count');
//console.log(btnMeGusta);

btnMeGusta.addEventListener('click', cambiarEstado);

function cambiarEstado (evento) {
    
    const cantidadLikesHTML = document.querySelector('.like-count');
    const numeroLikesJSON = localStorage.getItem('contadorlikes');

    const numeroLikes = JSON.parse(numeroLikesJSON);

    if(numeroLikes !== null){
        contadorlikes = numeroLikes;
    }

    if(btnMeGusta.classList.contains('like-btn')){
        btnMeGusta.classList.remove('like-btn');
        this.classList.remove('like-btn');
        this.textContent = 'No me gusta';
        contadorlikes++;
        localStorage.setItem('contadorlikes', JSON.stringify(contadorlikes));
        cantidadLikesHTML.innerHTML = `${contadorlikes}`

    }else{
        btnMeGusta.classList.add('like-btn');
        this.classList.add('like-btn');
        this.textContent = 'Me gusta';
        contadorlikes--;
        localStorage.setItem('contadorlikes', JSON.stringify(contadorlikes));
        cantidadLikesHTML.innerHTML = `${contadorlikes}`
    }

    //console.log(contadorlikes);

}

function cargarLS() {
    const cantidadLikesHTML = document.querySelector('.like-count');
    const numeroLikesJSON = localStorage.getItem('contadorlikes');

    const numeroLikes = JSON.parse(numeroLikesJSON);

    if(numeroLikes !== null){
        cantidadLikesHTML.textContent = `${numeroLikes}`;
    }else{
        cantidadLikesHTML.textContent = `0`;
    }

}

//antes de este codigo ya se tiene el inciso a), b), f)
const imagen = document.querySelector('.post-image')
imagen.addEventListener('dblclick', cambiarEstado);

//antes de este codigo ya se tiene el inciso a), b), f) y c)
const btnPublicar = document.querySelector('.add-comment-btn');

btnPublicar.addEventListener('click', agregarComentario);

function agregarComentario(evento) {
    //console.log('saludos');

    const barraTexto = document.querySelector('.comment-input')
    //console.log(barraTexto);

    //DIV DONDE SE ALMACENAN TODOS LOS COMENTARIOS:
    const contenedorComentarios = document.querySelector('.comments-container');

    //CREAR DIV DE UN COMENTARIO:
    const contenedorUnComentario = document.createElement('div');
    contenedorUnComentario.classList.add('comment');

    //CREAR EL SPAN DEL USUARIO:
    const spanUsuario = document.createElement('span');
    spanUsuario.classList.add('comment-username');
    spanUsuario.textContent = 'Usuario:';

    //CREAR EL SPAN DEL COMENTARIO
    let spanComentario = document.createElement('span');
    spanComentario.classList.add('comment-text');
    spanComentario = document.createTextNode(barraTexto.value);
    
    contenedorUnComentario.appendChild(spanUsuario);
    contenedorUnComentario.appendChild(spanComentario);

    contenedorComentarios.appendChild(contenedorUnComentario);

    barraTexto.value = '';

    subirLS();

}

// const verinfoUsuario = document.querySelector('.comment-username');
// console.log(verinfoUsuario);
//antes de este codigo ya se tienen los incisos //antes de este codigo ya se tiene el inciso a), b), c), d) y f)

function subirLS (){
    const contenedorComentarios = document.querySelector('.comments-container');
    const todosLosComentarios = document.querySelectorAll('.comment');
    const arrayComentarios = [];

    todosLosComentarios.forEach((comentario) => {

        const datosComentario = {
            usuario: comentario.querySelector('.comment-username'),
            texto: comentario.querySelector('.comment-text').textContent
        }

        arrayComentarios.push(datosComentario);
    });

    localStorage.setItem('comentarios', JSON.stringify(arrayComentarios));
}