//  const padre =document.querySelector(`.container`);
//  const  nodo= document.createElement(`h2`);
// //  console.log(padre);
// padre.appendChild(nodo);

const padre =document.querySelector(`#list`);
let html= document.createElement(`li`);
html.textContent = "Html";
html.classList.add("item");

let css=document.createElement(`li`);
css.textContent="CSS";
css.classList.add("item");

let js=document.createElement(`li`);
js.textContent="JS";
js.classList.add("item");

list.append(html,css,js); //append agregar



const card = document.querySelector(`.card`);
const final=document.querySelector(`#list`);
const titulo = document.createElement("h2");
titulo.textContent = "soy un titulo";
card.insertBefore(titulo,final);  //insertar antes


const afterbegin =document.createElement(`li`);
afterbegin.classList.add("item");
afterbegin.textContent="al inicio de la lista";

afterbegin.insertAdjacentElement("afterbegin",afterbegin);

const $dias = document.querySelector("#dias");

const dias = [
    {
      id: 1,
      name: "Lunes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 2,
      name: "Martes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 3,
      name: "Miercoles",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 4,
      name: "Jueves",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 5,
      name: "Viernes",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 6,
      name: "Sabado",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
    {
      id: 7,
      name: "Domingo",
      img: "https://picsum.photos/640/360",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
    },
  ];

  const $fragmen = document.createDocumentFragment();
  dias.map(({name,img,paragraph})=>{
    const $card = document.createElement("div");
    const $card_header = document.createElement("div");
    const $card_h2 = document.createElement("h2");
    const $card_body = document.createElement("div");
    const $card_img = document.createElement("img");
    const $card_paragraph = document.createElement("p");
    const $button = document.createElement("a");
    const $button_span = document.createElement("span");
    const $button_icon = document.createElement("i");

    //agregamos los estilos css
    $card.classList.add("card");
    $card_header.classList.add("card__header");
    $card_h2.classList.add("card__title");
    $card_body.classList.add("card__body");
    $card_img.classList.add("card__img");
    $card_paragraph.classList.add("card__paragraph");
    $button.classList.add("card__button--outline");
    $button_span.classList.add("button__text");
    $button_icon.classList.add("bx","bxs-chevro-right","button__icon");

    //agregamos los valores de los objetos de los elementos

    $card_h2.textContent=name;
    $card_paragraph.textContent=paragraph;
    $button_span.textContent="saber mas";

    //agregar atributos 
    $card_img.setAttribute("src",img);
    $card_img.setAttribute("alt",name);
    $button.setAttribute("href","#");

    //agregar los elementos hijos
    $card_body.appendChild($card_img);
    $card_body.appendChild($card_paragraph);
    $card_header.appendChild($card_h2);
    $card.appendChild($card_header);
    $card.appendChild($card_body);
    $button.appendChild($button_span);
    $button.appendChild($button_icon);
    $card_body.appendChild($button);
    $card.appendChild($card_body); //creacion de objetos

    $fragmen.append($card);  //crea un fragmento una unica vez
});

$dias.append($fragmen);  //template para optimizar