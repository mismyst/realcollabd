document.getElementById('signupButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show success message (optional)
    alert('Sign Up successful! Redirecting to Community Page...');

    // Redirect to community page
    window.location.href = 'community.html';
}); 