// FoodBeverage.js

// Function to scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners for the main buttons
document.getElementById('food-button').addEventListener('click', () => {
    scrollToSection('food-section');
});

document.getElementById('drink-button').addEventListener('click', () => {
    scrollToSection('drink-section');
});

// Event listeners for the cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const description = card.getAttribute('data-description');
        const title = card.querySelector('h4').innerText;

        // Populate modal content
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;

        // Show the modal
        document.getElementById('modal').style.display = 'flex';
    });
});

// Close modal functionality
document.getElementById('close-button').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
