const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const logoutButton = document.getElementById('logout');

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the username and password from the input fields
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the username and password are correct
  if (username === 'admin' && password === 'password') {
    // Set the username in local storage
    localStorage.setItem('username', username);

    // Redirect to the student management page
    window.location.href = 'student.html';
  } else {
    alert('Invalid username or password');
  }
});

// Handle logout button click
logoutButton.addEventListener('click', () => {
  // Clear the username from local storage
  localStorage.removeItem('username');

  // Redirect to the login page
  window.location.href = 'index.html';
});

// Check if the user is logged in
if (localStorage.getItem('username')) {
  // Redirect to the student management page
  window.location.href = 'student.html';
}
