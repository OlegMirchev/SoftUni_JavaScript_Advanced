function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rowsElement = Array.from(document.querySelectorAll('tbody tr'));
   let inputText = document.getElementById('searchField');

   function onClick() {
      for (const field of rowsElement) {
         field.classList.remove('select');

         if (inputText.value !== '' && field.textContent.includes(inputText.value)) {
            field.className = 'select';
         }
      }
      inputText.value = '';
   }
}