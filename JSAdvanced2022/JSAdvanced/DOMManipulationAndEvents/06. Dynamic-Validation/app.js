function validate() {

    let inputElement = document.getElementById('email');
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change', emailChange);
    
    function emailChange(e) {
        if (reg.test(e.currentTarget.value)) {
            e.currentTarget.classList.remove('error');
        }else {
            e.currentTarget.classList.add('error');
        }
    }
}