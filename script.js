//Con esta parte de nuestro código seleccionamos partes de nuestro HTML
const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//AQUI LO HACE CAMBIANDO SOLAMENTE EL TIPO DE BUTTON

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(event){
      
      const sumaInputs =  Number(input1.value) + Number(input2.value);
      pResult.innerText = "Resultado: " + sumaInputs;
}









///////AQUI LO HACE CON UN EVENT.PREVENTDEFAULT
// //Agrega un escuchador de eventos, o escucha cuando suceda un evento

// //1. De que elemento html estamos hablando (btn)
// //2. Cual de todos los eventos queremos escuchar ('click')
// //3. cual es la funcion que debe mandar a llamar cuando exista el evento de click
// form.addEventListener('submit',sumarInputValues);

// function sumarInputValues(event){
//       //console.log({event});
//       //Con esto cancelamos que se recarge la pagina
//       event.preventDefault();
//       const sumaInputs =  Number(input1.value) + Number(input2.value);
//       pResult.innerText = "Resultado: " + sumaInputs;
// }























// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');




















// console.log(input.value)
// console.log({
//       h1,
//       p,
//       parrafito,
//       pid,
//       input
// });

// h1.innerHTML = 'Patito <br> feo';
// h1.innerText = 'Patito <br> feo';

// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// // h1.classList.toggle('verde');
// input.value = "456";

// const img = document.createElement('img');

// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssuHBBCYbAjGrG4K_FBbFbGqs8Qy6pcCZtA&usqp=CAU');
// console.log(img);

// pid.innerHTML= "";
// pid.appendChild(img);
