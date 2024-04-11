const menuElement = document.querySelector('.btn-group-vertical')
menuElement.className = 'bnt-group-horizontal'

const headerWrapper = document.querySelector('.jumbotron')
headerWrapper.classList.add('bg-secondary')

const headerTitle = headerWrapper.querySelector('h1.display-4')
headerTitle.classList.add('text-right')
headerTitle.classList.add('text-white')

const leadElement = headerWrapper.querySelector('p.lead')
leadElement.classList.add('text-right')
leadElement.classList.add('text-white')

const hrElement = headerWrapper.querySelector('hr')
hrElement.classList.add('border-white')

const description = headerWrapper.getElementsByTagName('p')[1]
description.classList.add('text-white')
description.classList.add('text-right')

const buttonElement = headerWrapper.querySelector('a.btn')
buttonElement.classList.add('btn-success')

const anchorWrapper = document.createElement('div')
anchorWrapper.classList.add('text-right')
anchorWrapper.appendChild(buttonElement)
headerWrapper.appendChild(anchorWrapper)

const listGroup = document.querySelector('ul.list-group')
const firstListItemElement = document.querySelector('li.list-group-item')
firstListItemElement.classList.remove('active')

const DEFAULT_LIST_ITEM_CLASSNAME = 'list-group-item'

const fourthElement = document.createElement('li')
fourthElement.innerHTML = 'Quarto Elemento'
fourthElement.classList.add(DEFAULT_LIST_ITEM_CLASSNAME)
fourthElement.classList.add('active')

const fifthElement = document.createElement('li')
fifthElement.classList.add(DEFAULT_LIST_ITEM_CLASSNAME)
fifthElement.innerHTML = 'Quinto Elemento'

listGroup.appendChild(fourthElement)
listGroup.appendChild(fifthElement)

const cardsWrapper = document.querySelectorAll('.col-lg-3');
const orderedCards = [];
const DEFAULT_ORDER = [
  "Natureza",
  "Animais",
  "Pessoas",
  "Tecnologia"
];

DEFAULT_ORDER.forEach(title => {
  const card = Array.from(cardsWrapper)
    .find(card => card.querySelector('.card-title').textContent === title);
  const cardTitle = card.querySelector('.card-title')
  
  if(cardTitle.textContent === 'Animais') {
    const parent = cardTitle.parentNode
    const buttonToActive = parent.querySelector('a.btn')
    buttonToActive.classList.add('btn-success')
  }

  orderedCards.push(card);
});

const allTitles = document.querySelectorAll('.col-lg-12');
let cardTitleFather = null;

allTitles.forEach(item => {
  if(item.querySelector('h3').innerHTML === 'Cards'){ 
    cardTitleFather = item
  }
})

const existingCards = document.querySelectorAll('.col-lg-3');
existingCards.forEach(card => card.remove())

orderedCards.forEach(card => {
  console.log('card', cardTitleFather.parentNode)
  cardTitleFather.parentNode.appendChild(card)
});
