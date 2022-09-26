window.addEventListener('load', solution);

function solution() {
  let fullNameElement = document.getElementById('fname');
  let emailElement = document.getElementById('email');
  let phoneElement = document.getElementById('phone');
  let addressElement = document.getElementById('address');
  let codeElement = document.getElementById('code');
  let block = document.getElementById('block');

  let submitBtnElement = document.getElementById('submitBTN');
  let editBtnElement = document.getElementById('editBTN');
  let continueBtnElement = document.getElementById('continueBTN');

  let infoPreview = document.getElementById('infoPreview');

  submitBtnElement.addEventListener('click', (e) => {
    if (fullNameElement.value !== '' && emailElement.value !== '') {
      let liName = document.createElement('li');
      liName.textContent = `Full Name: ${fullNameElement.value}`;
      let liEmail = document.createElement('li');
      liEmail.textContent = `Email: ${emailElement.value}`;
      let liPhone = document.createElement('li');
      liPhone.textContent = `Phone Number: ${phoneElement.value}`;
      let liAddress = document.createElement('li');
      liAddress.textContent = `Address: ${addressElement.value}`;
      let liCode = document.createElement('li');
      liCode.textContent = `Postal Code: ${codeElement.value}`;

      infoPreview.appendChild(liName);
      infoPreview.appendChild(liEmail);
      infoPreview.appendChild(liPhone);
      infoPreview.appendChild(liAddress);
      infoPreview.appendChild(liCode);

      fullNameElement.value = '';
      emailElement.value = '';
      phoneElement.value = '';
      addressElement.value = '';
      codeElement.value = '';

      e.currentTarget.disabled = true;
      editBtnElement.disabled = false;
      continueBtnElement.disabled = false;
    }

  });

  editBtnElement.addEventListener('click', (e) => {
    let listItems = Array.from(infoPreview.childNodes);

    fullNameElement.value = listItems[0].textContent.split(': ')[1];
    emailElement.value = listItems[1].textContent.split(': ')[1];
    phoneElement.value = listItems[2].textContent.split(': ')[1];
    addressElement.value = listItems[3].textContent.split(': ')[1];
    codeElement.value = listItems[4].textContent.split(': ')[1];

    let itemsL = listItems.length;

    for (let i = 0; i < itemsL; i++) {
      listItems[i].remove();
    }

    submitBtnElement.disabled = false;
    e.currentTarget.disabled = true;
    continueBtnElement.disabled = true;
  });

  continueBtnElement.addEventListener('click', (e) => {
    block.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';

    block.appendChild(h3);
  });
}