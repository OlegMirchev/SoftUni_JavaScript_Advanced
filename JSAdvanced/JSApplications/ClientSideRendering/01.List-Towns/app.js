import { html, render } from '../node_modules/lit-html/lit-html.js';

let root = document.getElementById('root');
let towns = document.getElementById('towns');
let loadBtn = document.getElementById('btnLoadTowns');

loadBtn.addEventListener('click', onLoad);

const createTemplate = (data) => html`
<ul>
    ${data.map(t => html`<li>${t}</li>`)}
</ul>`;

function onLoad(e) {
    if (towns.value !== '') {
        e.preventDefault();

        let result = createTemplate(towns.value.split(', '));

        render(result, root);

        towns.value = '';

    }
}
