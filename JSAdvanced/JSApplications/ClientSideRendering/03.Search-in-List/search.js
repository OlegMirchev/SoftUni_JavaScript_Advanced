import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

let townElement = document.getElementById('towns');

const createTownTemplate = (towns, match) => html`
 <ul>
 ${towns.map(t => townTemplate(t, match))}
 </ul>
 <input type="text" id="searchText" />
 <button @click=${search}>Search</button>
 <div id="result">${matchCount(towns, match)}</div>
 `;

const townTemplate = (town, match) => html`
    <li class=${match && town.toLowerCase().includes(match.toLowerCase()) ? 'active' : ''}>${town}</li>`;

updateTown();

function updateTown(match) {
   let result = createTownTemplate(towns, match);

   render(result, townElement);
}

function matchCount(towns, match) {
   let machCount = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;

   return `${machCount} matches found`;
}

function search() {
   let searchText = document.getElementById('searchText').value;

   updateTown(searchText);
}
