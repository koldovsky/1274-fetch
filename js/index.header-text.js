const headerTitle = document.querySelector('h1');
// headerTitle.style.color = 'red';

const greetings = [
    "Привіт",
    "Hello",
    "Добрий день",
    "Hola"
]

const getRandomEl = arr => arr[Math.floor(Math.random() * arr.length)];


setInterval( () => {
    headerTitle.classList.toggle('highlight')
    headerTitle.innerText = getRandomEl(greetings);
}, 3000);

