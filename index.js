const boxDiv = document.getElementById('grid');
const animal = ['🦁', '🐶', '😺', '🐼'];

function Animals(name, id, description) {
  this.name = name;
  this.id = id;
  this.description = description;
}
const animals = [
  new Animals('Lion', '🦁', 'King of the world'),
  new Animals('Dog', '🐶', 'Dogs '),
  new Animals('Cat', '😺', 'Cats '),
  new Animals('Panda', '🐼', 'Panda '),
  new Animals('Horse', '🐎', 'Horse '),
  new Animals('Fox', '🦊', 'Fox '),
  new Animals('Cow', '🐄', 'Cow '),
  new Animals('Monkey', '🙉', 'Monkey '),
];

let sortedAnimals = animals.sort((a, b) => 0.5 - Math.random());
[...sortedAnimals, ...sortedAnimals].map((item, index, arr) => {
  boxDiv.innerHTML += `<div onclick="showValue(this)"  class='card' data-id='${item.id}'>?</div>`;
});

const card = document.getElementsByClassName('card');
let firstClik;
let secondClik;
let lockBoard = false;

let count = 0;
function showValue(event) {
  if (!lockBoard) {
    const stats = document.getElementById('stats');
    count = count + 1;
    stats.innerText = `Flips:${count}`;
    event.setAttribute('class', 'card flip');
    event.innerText = `${event.dataset.id}`;

    if (!firstClik) {
      firstClik = event;
    } else if (firstClik && !secondClik) {
      secondClik = event;
      lockBoard = true;
    }

    if (
      firstClik &&
      secondClik &&
      firstClik.dataset.id === secondClik.dataset.id
    ) {
      let find = animals.find((item) => {
        return item.id === firstClik.dataset.id;
      });

      firstClik = undefined;
      secondClik = undefined;
      lockBoard = false;
      if (!lockBoard) {
        alert(find.description);
      }
    }
  }
}
function deleteValue(event) {
  firstClik.setAttribute('class', 'card');
  secondClik.setAttribute('class', 'card');
  firstClik.innerText = '?';
  secondClik.innerText = '?';
  firstClik = undefined;
  secondClik = undefined;
  lockBoard = false;
}
