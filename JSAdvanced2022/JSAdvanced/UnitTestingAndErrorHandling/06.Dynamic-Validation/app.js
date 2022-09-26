function validate() {
    document.getElementById('email').addEventListener('change', validateFunc);
    let regex = /([a-z]+@[a-z]+\.[a-z])+/gm;

    function validateFunc(event) {
        if (regex.test(event.currentTarget.value)) {
            event.currentTarget.classList.remove('error');
        }else{
            event.currentTarget.classList.add('error');
        }
    }
}