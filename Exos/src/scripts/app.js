console.info('Hello world');

let btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    let body = document.querySelector("body");
    if (body.getAttribute("data-open") == "false") {
        body.setAttribute("data-open", "true");
    } else {
        body.setAttribute("data-open", "false");
    }
});