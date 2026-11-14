const phrases = [
  {
    text: "Депнуть на Case-Battle.",
    image: "https://i.pinimg.com/736x/b1/f5/3b/b1f53b91017df5e3aa442680a459a54b.jpg"
  },
  {
    text: "Задонатить в Зетку.",
    image: "https://i.pinimg.com/736x/28/74/66/287466fa941a90a844676169a46a98a4.jpg"
  },
  {
    text: "Слить в Dark Souls.",
    image: "https://i.pinimg.com/originals/c9/5b/2d/c95b2d8de1fa0fa26eed034255959a95.gif"
  },
  {
    text: "Вонять в Персоне.",
    image: "https://i.pinimg.com/1200x/7b/3e/26/7b3e26eb03aacec6cd38ffdaf22c5d50.jpg"
  },
  {
    text: "Навайбкодить лабу.",
    image: "https://i.pinimg.com/736x/37/85/c0/3785c0f5e047c87e4d5396b56ea752d4.jpg"
  },
  {
    text: "Оформить газявы.",
    image: "https://i.pinimg.com/1200x/24/6d/cc/246dccff178f0f2dbaa04590a3d7f253.jpg"
  }
];

function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

let button = document.querySelector(".button");
let advice = document.querySelector(".advice");
let phrase = document.querySelector(".phrase");
let image = document.querySelector(".image");

button.addEventListener("click", function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);


    if (randomElement.text.length > 40) {
        phrase.style.fontSize = "33px";
    } else {
        phrase.style.fontSize = "42px";
    }
});

for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 

anime({
    targets: '.logo',
    translateX: 150,       // сместить на 120px вправо
    duration: 1800,
    easing: 'easeInSine',
});

anime({
    targets: '.button',
    translateX: -165, 
    translateY: 43,      // сместить на 120px вправо
    duration: 1800,
    easing: 'easeInSine',
});