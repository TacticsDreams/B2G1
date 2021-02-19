console.info('Hello world');

let btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let bg = document.querySelector('.app');
    bg.classList.toggle('app--night');
    let title = document.querySelector('h1');
    if (bg.classList.contains('app--night')) {
        title.innerHTML = "Bonsoir tout le monde.";
    } else {
        title.innerHTML = "Bonjour tout le monde.";
    }
});