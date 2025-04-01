document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelectorAll('.profile-card');

    profileCards.forEach(card => {
        card.addEventListener('click', () => {
            // Check if the clicked card is already active
            const isActive = card.classList.contains('active');

            // Remove 'active' class from all cards first
            profileCards.forEach(c => c.classList.remove('active'));

            // If the clicked card wasn't already active, make it active
            if (!isActive) {
                card.classList.add('active');
                // Re-trigger animation for vertical bars (optional, CSS handles initial reveal)
                const verticalBars = card.querySelectorAll('.spending-chart .bar-segment');
                verticalBars.forEach(bar => {
                    // Force reflow to restart animation if needed (often not necessary)
                    // void bar.offsetWidth;
                    bar.style.animation = 'none'; // Reset animation
                    setTimeout(() => { bar.style.animation = ''; }, 10); // Re-apply
                });
            }
        });
    });
});