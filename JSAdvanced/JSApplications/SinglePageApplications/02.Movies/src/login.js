import { showView, updateNav} from "./util.js";
import { homePage } from "./home.js";

let section = document.querySelector('#form-login');
let form = section.querySelector('form');
form.addEventListener('submit', onsubmit);

export function loginPage() {
    showView(section);
}

async function onsubmit(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

   await login(email, password);
   form.reset();
   updateNav();
   homePage();
}

async function login(email, password) {
    try {
        let res = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!res.ok) {
            let error = await res.json();
            throw new Error(error.message);
        }

        let user = await res.json();
        localStorage.setItem('user', JSON.stringify(user));
        
    } catch (error) {
        alert(error.message);
        throw error;
    }
}