
import { deleteNote, getNotes, addComment } from '../index.js';
const localStorage = window.localStorage;
export const pedido = () => {
  const divPedido = document.createElement('div');
  const viewStart = /*html*/ `
    <div class='startContainer'>
      <div class='header1'>
        <div class='logo'>
          <img src='img/palmerita.png' class='logotipo1'alt='logo'>
        </div>
        <div class='title'>
          <h1 class='subtitle'>ourist places</h1>
        </div>
        <div class='usuario'>
          <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' class= 'user1' /></a>
        </div>
      </div>
      <div class='menu'>
        <ul>
          <li>
            <a href='#/AddContact'>AddContact</a>
          </li>
          <li>
            <a href='#/contact'>Contact</a>
          </li>
          <li>
            <a href='#/favorite'>Favorite </a>
          </li>
          <li>
            <a href='#/shops'>Shops</a>
          </li>
          <li>
            <a href='#/start'>start</a>
          </li>
        </ul>
      </div>
      <div class='containerStart'>    
        <div class='subtitulo'>
          <h2>Start</h2>
        </div>
        <div class='generalList'>
          <div class='usuario'>
            <div class='nameUser'>
              <a title='profile' href='#/profile'><img src='img/usuarioDama.png' class= 'user2' alt='profile' /></a>
              <div class='userName'></div>
            </div>
          </div>
          <div class='publics'>
            <img class='public' src='img/glaciares.jpg'  alt='imagen'>
          </div>
        </div>
        <div class='userShared'>
          <div class='like'>
            <input type='image' class='buttonLike' src='img/estrellaAzul1.png' id='buttonLike' />
          </div>
          <div class='writeComment'>
            <input type='image' class='buttonComment' src='img/mensaje2.png' id='buttonComment1' />
          </div>
          <div class='share'>
           <input type='image' class='buttonShare' src='img/enviar2.png' id='buttonShare' />
          </div>
        </div>
        <div class='sum'>
         <div class='likeSum'></div>
         <div class='commentSum' id= 'commentSum'></div>
        </div>
        <div class= 'see'>
         <a id='buttonComments'>see comments</a>
        </div>
        <div class='comment' id='commentsUser'></div>
        <div class='write'>
          <div class='profile'>
            <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' class= 'user3' /></a>
          </div>
          <div class='commentUser'>  
            <input type='text' name='comments' class='comments' id='comments' placeholder='comments' />
          </div>
          <div class='send'>  
            <input type='image' class='buttonSend' src='img/enviar2.png' id='buttonSend' alt='button Send' />
            <input type='image' class='buttonDelete eliminar' src='img/menos.png' id='buttonDelete' alt='button delete' />
          </div>
        </div>
        <div class='footer'>
          <div class='inicio'>
            <a title='home' href='#/start'><img src='img/home.png' alt='home' class= 'home' /></a>
          </div>
          <div class='favorito'>
            <a title='favorite' href='#/favorite'><img src='img/start.png' class= 'start' alt='Favorite' /></a>
          </div>
          <div class='shops'>
            <a title='shops' href='#/shops'><img src='img/tienda8.png' alt='shops' class= 'shops'/></a>
          </div>
          <div class='usuario'>
          <a title='profile' href='#/profile'><img src='img/usuario2.png' alt='profile' class= 'user4' /></a>
          </div>
        </div>
     </div>`;

  divPedido.innerHTML = viewStart;

  // suma de like
  const buttonLike = divPedido.querySelector('#buttonLike');
  buttonLike.addEventListener('click', () => {
    if (localStorage.contador) {
      localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
      localStorage.contador = 1;
    }
    document.querySelector('.likeSum').innerHTML = localStorage.contador;
  });

  // comemtarios
  const buttonSend = divPedido.querySelector('#buttonSend');
  buttonSend.addEventListener('click', () => {
    let comment = document.querySelector('#comments').value;
    document.querySelector('#commentsUser').innerHTML = comment;
    addComment(comment);
    if (localStorage.contador) {
      localStorage.contador = parseInt(localStorage.contador) + 1;
    } else {
      localStorage.contador = 1;
    }
    document.querySelector('#commentSum').innerHTML = localStorage.contador;
  });

  const buttonComment = divPedido.querySelector('#buttonComments');
  buttonComment.addEventListener('click', () => {
    // Obtener la referencia del elemento body
    const div = document.querySelector('#commentsUser');
    div.innerHTML = '';
    // Crea un elemento <table> y un elemento <tbody>
    const tabla = document.createElement('table');
    const tblBody = document.createElement('tbody');
    getNotes().then((array) => {
      array.forEach(data => {
        console.log(data.data().title);
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var textoTd1 = document.createTextNode(
          data.data().title
        );
        td1.appendChild(textoTd1);
        tr.appendChild(td1);
        var td2 = document.createElement("td");
        var deleteButton = document.createElement('a');
        deleteButton.className='eliminar';
        var textoTd2 = document.createTextNode(
          'Eliminar'
        );
        deleteButton.appendChild(textoTd2);
        deleteButton.onclick = () => {
          deleteNote(data.id);
          tr.remove();
        };
        td2.appendChild(deleteButton);
        tr.appendChild(td2);
        tblBody.appendChild(tr);
      });
    })

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    div.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    //tabla.setAttribute("border", "2");


  });

  return divPedido;
};