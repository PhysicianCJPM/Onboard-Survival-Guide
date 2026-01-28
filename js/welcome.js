document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.character-wrapper');

    wrapper.addEventListener('click', () => {
        // Remove classes if present (reset animation)
        wrapper.classList.remove('twirl', 'bounce');

        // Trigger reflow to allow re-animation
        void wrapper.offsetWidth;

        // Add classes again to run animation once
        wrapper.classList.add('twirl', 'bounce');
    });
});
