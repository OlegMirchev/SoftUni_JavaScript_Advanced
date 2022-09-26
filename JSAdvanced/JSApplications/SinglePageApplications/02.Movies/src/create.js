import { homePage } from "./home.js";
import { showView } from "./util.js";

let section = document.querySelector('#add-movie');
let form = section.querySelector('form');
form.addEventListener('submit', onsubmit);

export function createPage() {
    showView(section);
}

async function onsubmit(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');

    await createMovie(title, description, img);
    form.reset();
    homePage();
}

async function createMovie(title, description, img) {
    let user = JSON.parse(localStorage.getItem('user'));

    await fetch('http://localhost:3030/data/movies', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({
            title,
            description,
            img
        })
    });
}