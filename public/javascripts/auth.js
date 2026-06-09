const togglePasswordBtns = document.querySelectorAll('.toggle-password-btn');

console.log(togglePasswordBtns)

togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        if (input.type === 'password') {
            btn.src = '/images/show-password-icon.svg';
        } else {
            btn.src = '/images/hide-password-icon.svg';
        }
    })
})
