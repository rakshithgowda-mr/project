function openModal(type) {
  document.getElementById(type + 'Modal').style.display = 'block';
}

function closeModal(type) {
  document.getElementById(type + 'Modal').style.display = 'none';
}

function switchAuth(type) {
  closeModal('login');
  closeModal('signup');
  openModal(type);
}

// login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login logic goes here (Firebase or backend)");
});

//  signup
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Sign-up logic goes here (Firebase or backend)");
});

// Close modals on outside click
window.onclick = function(event) {
  ['loginModal', 'signupModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};


