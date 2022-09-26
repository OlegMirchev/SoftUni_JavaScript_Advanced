let views = [...document.querySelectorAll('.view-section')];

function hideAll() {
    views.forEach(v => v.style.display = 'none');
}

export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

export function spinner() {
    let p = document.createElement('p');
    p.innerHTML = 'Loading &hellip;';

    return p;
}

export function updateNav() {
    let user = JSON.parse(localStorage.getItem('user'));
    let welcomeEmail = document.getElementById('welcome');

    if (user) {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(u => u.style.display = 'none');
        welcomeEmail.textContent = `Welcome, ${user.email}`;
    }else {
        document.querySelectorAll('.user').forEach(u => u.style.display = 'none');
        document.querySelectorAll('.guest').forEach(u => u.style.display = 'inline-block');
        welcomeEmail.textContent = '';
    }
}