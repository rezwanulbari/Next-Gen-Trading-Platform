// Main script for the trading platform
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any dynamic functionality
    
    // Tooltip initialization
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Market ticker animation
    const tickerContainer = document.querySelector('.animate-marquee');
    if (tickerContainer) {
        // Duplicate content for seamless looping
        tickerContainer.innerHTML += tickerContainer.innerHTML;
    }
    
    // Balance card hover effects
    const balanceCards = document.querySelectorAll('[class*="border-l-4"]');
    balanceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const borderColor = getComputedStyle(card).borderLeftColor;
            card.style.boxShadow = `0 4px 20px -5px ${borderColor}`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = 'none';
        });
    });
});