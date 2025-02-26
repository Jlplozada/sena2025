const card = {
  id: 1,
  name: "Titulo de la nueva card",
  img: "https://picsum.photos/640/360",
  paragraph:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, consectetur.",
};

const $cards = document.querySelector("#cards");

// Create elements
const $card = document.createElement("div");
const $card_header = document.createElement("div");
const $card_h2 = document.createElement("h2");
const $card_body = document.createElement("div");
const $card_img = document.createElement("img");
const $card_paragraph = document.createElement("p");
const $button = document.createElement("a");
const $button_span = document.createElement("span");
const $button_icon = document.createElement("i");

$card_h2.textContent = card.name;
$card_paragraph.textContent = card.paragraph;
$button_span.textContent = "saber mas";

// Add CSS classes
$card.classList.add("card");
$card_header.classList.add("card__header");
$card_h2.classList.add("card__title");
$card_body.classList.add("card__body");
$card_img.classList.add("card__img");
$card_paragraph.classList.add("card__paragraph");
$button.classList.add("button", "button--outline");
$button_span.classList.add("button__text");
$button_icon.classList.add("bx", "bxs-chevron-right", "button__icon");

$card_img.setAttribute("src", card.img);
$card_img.setAttribute("alt", card.name);
$button.setAttribute("href", "#");

$card_header.append($card_h2);
$button.append($button_span, $button_icon);
$card_body.append($card_img, $card_paragraph, $button);
$card.append($card_header, $card_body);

$cards.insertAdjacentElement("afterbegin", $card);

const buttons = $cards.querySelectorAll("a.button");
buttons.forEach((btn, index) => {
  if (index % 2 === 0) {
    btn.classList.add("button_blue");
  } else {
    btn.classList.add("button_red");
  }
  if (index ===4){
   Item.classList.toggle(`bg-white`);
   console.log(Item);
   $cards.removeChild(Item);
  };
  for (let i = array.length; i >=0; i--) {
    const element = array[i];
    
  }


  do {
    console.log(array(--array.length));
  } while (array.length>0);



});
$card.removeAttribute();
