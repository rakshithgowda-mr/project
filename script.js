// Open modal by type ('login' or 'signup')
function openModal(type) {
  document.getElementById(type + 'Modal').style.display = 'block';
}

// Close modal by type
function closeModal(type) {
  document.getElementById(type + 'Modal').style.display = 'none';
}

// Switch between login and signup modals
function switchAuth(type) {
  closeModal('login');
  closeModal('signup');
  openModal(type);
}

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login logic goes here (Firebase or backend)");
});

// Handle signup form submission
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Sign-up logic goes here (Firebase or backend)");
});

// Close modals when clicking outside of them
window.onclick = function(event) {
  ['loginModal', 'signupModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

// NEW: Open notifications page when card is clicked
function openNotifications() {
  // Open in the same tab:
  window.location.href = "notification.html";

  // OR open in a new tab:
  // window.open("notifications.html", "_blank");
}
function openRating() {
  // Open in the same tab:
  window.location.href = "rating.html";

  // OR open in a new tab:
  // window.open("notifications.html", "_blank");
}

function openonline() {
  // Open in the same tab:
  window.location.href = "online.html";

  // OR open in a new tab:
  // window.open("not.html", "_blank");
}
