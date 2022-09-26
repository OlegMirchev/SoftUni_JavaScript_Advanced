import { detailsPage } from "./details.js";
import { showView, spinner } from "./util.js";

let section = document.querySelector('#home-page');
let catalog = section.querySelector('#movie .card-deck.d-flex.justify-content-center');
catalog.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.preventDefault();

        let id = e.target.dataset.id;
        detailsPage(id);
    }
});

export function homePage() {
    showView(section);
    displayMovies();
}

async function displayMovies() {
    catalog.replaceChildren(spinner());
    let movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviesPreview));
}

function createMoviesPreview(movie) {
    let div = document.createElement('div');
    div.className = 'card mb-4';
    div.innerHTML = `<img class="card-img-top" src="${movie.img}"
    alt="Card image cap" width="400">
<div class="card-body">
    <h4 class="card-title">${movie.title}</h4>
    </div>
<div class="card-footer">
     <a href="#/details/${movie._id}">
         <button data-id="${movie._id}" type="button" class="btn btn-info">Details</button>
    </a>
</div>`;

    return div;
}

async function getMovies() {
    let res = await fetch('http://localhost:3030/data/movies');
    let data = await res.json();

    return data;
}
