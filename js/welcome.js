document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.character-wrapper');

    wrapper.addEventListener('click', () => {
        // Start twirl animation
        wrapper.classList.add('twirl');

        // When twirl ends, remove it and trigger bounce
        wrapper.addEventListener('animationend', () => {
            wrapper.classList.remove('twirl');
            wrapper.classList.add('bounce');

            // Remove bounce after it ends to allow repeated clicks
            wrapper.addEventListener('animationend', () => {
                wrapper.classList.remove('bounce');
            }, { once: true });
        }, { once: true });
    });
});

//for rebuild comment