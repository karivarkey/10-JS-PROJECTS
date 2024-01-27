document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card').forEach(function (card) {
        card.style.transition = 'border-color 0.3s ease-in-out'; // Add CSS transition property

        card.addEventListener('mouseover', function () {
            // Generate a random hex color
            const colors = ["#8839ef", "#53a941", "#fe640b", "#04a5e5", "#303446"];
            const randomElement = colors[Math.floor(Math.random() * colors.length)];
            // Apply the random color to the border
            this.style.borderColor = randomElement;
        });

        card.addEventListener('mouseout', function () {
            // Reset the border color on mouseout
            this.style.borderColor = 'transparent';
        });
    });
});
