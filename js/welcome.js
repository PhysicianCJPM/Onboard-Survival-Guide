document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');

    character.addEventListener('click', () => {
        character.classList.add('twirl');

        character.addEventListener('animationend', () => {
            character.classList.remove('twirl');
            character.classList.add('bounce');

            character.addEventListener('animationend', () => {
                character.classList.remove('bounce');
            }, { once: true });
        }, { once: true });
    });
});
