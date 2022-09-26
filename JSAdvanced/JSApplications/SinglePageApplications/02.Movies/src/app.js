
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./util.js";

document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {
    if (e.target.tagName === 'A' && e.target.href) {
        e.preventDefault();
        let path = new URL(e.target.href);
        let view = routes[path.pathname];

        if (typeof view === 'function') {
            view();
        }
    }
}

let routes = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logout
};

function logout() {
    localStorage.removeItem('user');
    updateNav();
}

updateNav();
homePage();
