//your JS code here. If required.
window.onload = function() {
    // Check if there's saved login information in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    
    if (savedUsername && savedPassword) {
        // Show the existing login button if details are saved
        document.getElementById('existing').style.display = 'block';
    }

    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
            // Save login details to local storage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            // Remove login details from local storage
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        // Show login alert
        alert('Logged in as ' + username);
    });

    // Handle existing user login
    document.getElementById('existing').addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
    });
};
