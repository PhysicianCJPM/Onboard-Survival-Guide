document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');

    character.addEventListener('click', () => {
        // Start twirl
        character.classList.add('twirl');

        // After twirl ends, remove twirl & add bounce
        character.addEventListener('animationend', () => {
            character.classList.remove('twirl');
            character.classList.add('bounce');

            // Remove bounce after it ends so it can repeat on next click
            character.addEventListener('animationend', () => {
                character.classList.remove('bounce');
            }, { once: true });
        }, { once: true });
    });
});
