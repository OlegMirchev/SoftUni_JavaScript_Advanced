import { showView, spinner } from "./util.js";

let section = document.querySelector('#movie-example');

export function detailsPage(id) {
    showView(section);
    displayMovie(id);
}

async function displayMovie(id) {
    section.replaceChildren(spinner());

    let user = JSON.parse(localStorage.getItem('user'));

    let [movie, likes, ownLikes] = await Promise.all([
        createMovie(id),
        getLikes(id),
        getOwnLikes(id, user)
    ]);

    section.replaceChildren(createMovieDetails(movie, user, likes, ownLikes));
}

function createMovieDetails(movie, user, likes, ownLikes) {
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `<div class="row bg-light text-dark">
    <h1>Movie title: ${movie.title}</h1>

    <div class="col-md-8">
        <img class="img-thumbnail" src="${movie.img}" alt="Movie">
    </div>
    <div class="col-md-4 text-center">
        <h3 class="my-3 ">Movie Description</h3>
        <p>${movie.description}</p>
        ${createControls(movie, user, likes, ownLikes)}
    </div>
</div>`;

    let likesBtn = div.querySelector('.like-btn');

    if (likesBtn) {
        likesBtn.addEventListener('click', (e) => likeMovie(e, movie._id));
    }

    return div;
}

function createControls(movie, user, likes, ownLikes) {
    let isOwner = user && user._id === movie._ownerId;
    let controls = [];

    if (isOwner) {
        controls.push(`<a class="btn btn-danger" href="#">Delete</a>`);
        controls.push(`<a class="btn btn-warning" href="#">Edit</a>`);
    } else if (user && ownLikes === false) {
        controls.push(`<a class="btn btn-primary like-btn" href="#">Like</a>`);
    }

    controls.push(`<span class="enrolled-span">Liked ${likes}</span>`);

    return controls.join('');
}

async function createMovie(id) {
    let res = await fetch(`http://localhost:3030/data/movies/${id}`);
    let movie = await res.json();

    return movie;
}

async function getLikes(id) {
    let res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    let likes = await res.json();

    return likes;
}

async function getOwnLikes(movieId, user) {
    if (!user) {
        return false;
    } else {
        let userId = user._id;

        let res = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22 `);
        let like = await res.json();

        return like.length > 0;
    }
}

async function likeMovie(e, movieId) {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem('user'));

    await fetch('http://localhost:3030/data/likes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({
            movieId
        })
    });

    detailsPage(movieId);
}