import { html, render } from '../node_modules/lit-html/lit-html.js';
import { cats } from './catSeeder.js';

let allCats = document.getElementById('allCats');

allCats.addEventListener('click', updateCat);

const createCats = (catsArr) => html`
<ul>
   ${catsArr.map(cat => html`
     <li>
         <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
          <div class="info">
               <button class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
               <h4>Status Code: ${cat.statusCode}</h4>
               <p>${cat.statusMessage}</p>
            </div>
          </div>
     </li>
`)}
</ul>`;

addCat();

function addCat(e) {
    let result = createCats(cats);

    render(result, allCats);
}

function updateCat(e) {
    if (e.target.tagName === 'BUTTON') {
        let el = e.target.parentElement.querySelector('.status');
        if (el.style.display === 'none') {
            el.style.display = 'block';
            e.target.textContent = 'Hide status code';
        }else{
            el.style.display = 'none';
            e.target.textContent = 'Show status code';
        }
    }    
}