const people = [
  { name: "Alice", role: "Mentor", skills: ["Java", "Spring"], availability: "Evenings" },
  { name: "Bob", role: "Learner", skills: ["Python", "Data Science"], availability: "Weekends" },
  { name: "Carol", role: "Mentor", skills: ["JavaScript", "React"], availability: "Mornings" },
  { name: "Dave", role: "Learner", skills: ["Java", "SQL"], availability: "Evenings" },
];

function displayResults(filteredPeople) {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  filteredPeople.forEach(person => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${person.name} (${person.role})</h3>
      <p><strong>Skills:</strong> ${person.skills.join(", ")}</p>
      <p><strong>Availability:</strong> ${person.availability}</p>
    `;
    resultsDiv.appendChild(card);
  });
}

function filterResults() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filtered = people.filter(p =>
    p.skills.join(", ").toLowerCase().includes(searchInput) ||
    p.availability.toLowerCase().includes(searchInput)
  );
  displayResults(filtered);
}

// Display all on load
window.onload = () => displayResults(people);
