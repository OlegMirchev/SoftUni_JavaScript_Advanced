function focused() {
   
    let inputElements = document.querySelectorAll('div input');

    for (const element of inputElements) {
        element.addEventListener('focus', focusedInput);
        element.addEventListener('blur', blurredInput);
    }
    function focusedInput(e) {
        e.currentTarget.parentElement.className = 'focused';
    }
    
    function blurredInput(e) {
        e.currentTarget.parentElement.classList.remove('focused');
    }
}