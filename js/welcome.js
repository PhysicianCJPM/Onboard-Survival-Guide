document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.character-wrapper');

    wrapper.addEventListener('click', () => {
        // Remove the class if it exists
        wrapper.classList.remove('twirl-bounce');

        // Force reflow so the animation can restart
        void wrapper.offsetWidth;

        // Add the class to trigger twirl + bounce
        wrapper.classList.add('twirl-bounce');
    });
});
