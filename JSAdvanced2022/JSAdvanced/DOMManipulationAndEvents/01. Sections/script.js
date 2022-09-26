function create(array) {
   
   let resultElement = document.getElementById('content');

   for (const word of array) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      let text = document.createTextNode(word);

      p.appendChild(text);
      p.style.display = 'none';
      div.appendChild(p);
      div.addEventListener('click', (e) => {
         e.currentTarget.children[0].style.display = 'block';
      });

      resultElement.appendChild(div);
   }
}