const togglePasswordBtns = document.querySelectorAll('.toggle-password-btn');

togglePasswordBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const input = btn.previousElementSibling;
        input.type = input.type === 'password' ? 'text' : 'password';
        btn.src = input.type === 'password' ? '/images/show-password-icon.svg' : '/images/hide-password-icon.svg';
    })
})
