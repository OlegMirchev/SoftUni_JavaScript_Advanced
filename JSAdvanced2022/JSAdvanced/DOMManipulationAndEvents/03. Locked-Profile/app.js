function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        let profile = e.currentTarget.parentElement;
        let isValid = profile.querySelector('input[value = "unlock"]').checked;

        if (isValid) {
            let info = Array.from(profile.querySelectorAll('div')).find(p => p.id.includes('HiddenFields'));

            if (e.currentTarget.textContent === 'Show more') {
                e.currentTarget.textContent = 'Hide it'
                info.style.display = 'block';
            }else {
                e.currentTarget.textContent = 'Show more'
                info.style.display = 'none';
            }
        }
    }
}