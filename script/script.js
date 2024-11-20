document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-group input');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });
});