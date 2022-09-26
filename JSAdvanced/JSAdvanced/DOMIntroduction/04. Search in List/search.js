function search() {

   let townElements = Array.from(document.querySelectorAll('#towns li'));
   let textElement = document.getElementById('searchText');

   let resultElement = document.getElementById('result');
   let matches = 0;

   for (const town of townElements) {
      if (town.textContent.includes(textElement.value) && textElement.value !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   resultElement.textContent = `${matches} matches found`;
}
