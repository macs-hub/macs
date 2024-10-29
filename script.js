// Function to open the popup
function openPopup() {
    var popup = document.getElementById('newsletterPopup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById('newsletterPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}

// Event listener for the subscribe button
document.addEventListener('DOMContentLoaded', function() {
    var subscribeBtn = document.getElementById('subscribeBtn');
    var closeBtn = document.querySelector('.close-btn');
    var popup = document.getElementById('newsletterPopup');

    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', openPopup);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closePopup);
    }

    // Event listener to close the popup when clicking outside the popup content
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Automatically open the popup after 10 seconds
    setTimeout(openPopup, 10000);
});