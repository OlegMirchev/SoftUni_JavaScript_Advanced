import {html, render} from '../node_modules/lit-html/lit-html.js';

let itemText = document.getElementById('itemText');
let div = document.querySelector('div');
let form = document.querySelector('form');
let url = 'http://localhost:3030/jsonstore/advanced/dropdown';

form.addEventListener('submit', addItem);

const selectTemplate = (towns) => html`
<select id="menu">
${towns.map(t => html`<option value=${t._id}>${t.text}</option>`)}
</select>
`;

await getTown();

async function getTown() {
    let res = await fetch(url);
    let data = await res.json();

    update(Object.values(data));
}

function update(towns) {
    let result = selectTemplate(towns);

    render(result, div);
}

async function addItem(e) {
    e.preventDefault();

    let text = itemText.value;

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({text})
    });

    itemText.value = '';

    if (res.ok) {
        await getTown();
    }
}