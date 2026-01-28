document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.character-wrapper');

    wrapper.addEventListener('click', () => {
        // Add infinite twirl & bounce classes
        wrapper.classList.add('twirl', 'bounce');

        // Remove classes after some time if you want to allow restarting animation later
        // Optional: comment out if you want truly infinite until page reload
        setTimeout(() => {
            wrapper.classList.remove('twirl', 'bounce');
        }, 5000); // adjust duration if needed
    });
});
