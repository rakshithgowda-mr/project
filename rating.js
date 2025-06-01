const stars = document.querySelectorAll(".star-rating span");
let selectedRating = 0;

stars.forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.value);
    updateStars(selectedRating);
  });
});

function updateStars(rating) {
  stars.forEach(star => {
    if (parseInt(star.dataset.value) <= rating) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

document.getElementById("reviewForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const text = document.getElementById("reviewText").value;
  if (selectedRating === 0) {
    alert("Please select a star rating.");
    return;
  }

  const reviewHTML = `
    <div class="review-card">
      <div class="stars">${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</div>
      <p>${text}</p>
    </div>
  `;

  document.getElementById("reviewsList").innerHTML += reviewHTML;
  document.getElementById("reviewText").value = "";
  selectedRating = 0;
  updateStars(0);
});
