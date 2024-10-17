// Function to display the response for "Yes"
function showResponse(answer) {
    const responseDiv = document.querySelector('.response');
    if (answer === 'yes') {
        responseDiv.textContent = "Yay! Thank you for forgiving me! 🎉";
    }
}

// Function to move the "No" button
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseenter', moveButton);

function moveButton() {
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();
    
    // Get random position within the card
    let newLeft = Math.random() * (cardRect.width - buttonRect.width);
    let newTop = Math.random() * (cardRect.height - buttonRect.height);

    // Apply new position to the "No" button
    noButton.style.position = 'absolute';
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
}
