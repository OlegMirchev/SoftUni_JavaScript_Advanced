import { html, render } from '../node_modules/lit-html/lit-html.js';

let searchField = document.getElementById('searchField');
let tbody = document.querySelector('.container tbody');

let searchBtn = document.getElementById('searchBtn');

let url = 'http://localhost:3030/jsonstore/advanced/table';

searchBtn.addEventListener('click', onClick);

const tableTemplate = (people) => html`
${people.map(p => html`
<tr class=${p.match ? 'select' : ''}>
   <td>${p.item.firstName} ${p.item.lastName}</td>
   <td>${p.item.email}</td>
   <td>${p.item.course}</td>
</tr>
   `)}
`;

let students;

await getPeople();

function matchPeople(people) {
   let textInput = searchField.value;

   for (const person of people) {
      person.match = Object.values(person.item).some(p => textInput && p.toLowerCase().includes(textInput.toLowerCase().trim()));
   }
}

async function getPeople() {
   let res = await fetch(url);
   let data = await res.json();

   students = Object.values(data).map(s => ({ item: s, match: false }));

   updateInfo(students);
}

function updateInfo(people) {
   let result = tableTemplate(people);

   render(result, tbody);
}

function onClick(e) {
   e.preventDefault();

   matchPeople(students);

   updateInfo(students)

   searchField.value = '';
}