const dom = document;
const header = dom.querySelector('header');
const paragraph = dom.querySelector('p');
let styles = dom.styleSheets;
const script = dom.scripts;
const links = dom.links;
const img = dom.images;
const form = dom.forms;
const listaB = dom.getElementsByClassName('listaB');

const hermanos= dom.querySelectorAll('ul.list > li.item');

// console.log(padre.childNodes);
// console.log(padre.childElementCount);
// console.log(padre.children);
// console.log(padre.lastchildren);





// console.log(form);
// console.log(document);
// console.log(api);
// console.log(lista);
// console.log(listaA.lenght);
// console.log(listaB.lenght);

// const card = dom.querySelector(`.card`);
// console.log($card.classlist.contains(`card`));
// $card.classlist.add("bg-dark");
// $card.classlist.remove("card");
// $card.classlist.toggle("card");


let texto = `Lorem ipsum dolor sit, amet <b>consectetur</b> adipisicing elit. ${2+2}Sapiente est quasi amet voluptatem autem aperiam dolorem tempore natus, provident dicta.
`; //texto
const elementos =dom.querySelector("#elementos");//#id 
elementos.textContent=texto; //crear texto
elementos.innerHTML=texto;//formato html
Body.style.backgraund="#000";
setTimeout(()=>{
    Body.style.backgraund="";
},6000)