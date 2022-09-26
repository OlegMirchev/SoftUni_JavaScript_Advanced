function notify(message) {
  let resultElement = document.getElementById('notification');
  resultElement.innerText = message;
  resultElement.style.display = 'block';

  resultElement.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
  });
}