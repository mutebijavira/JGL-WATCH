function toggleAuth() {
  const modal = document.getElementById("authModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

function loginUser() {
  const email = document.getElementById("email").value;
  alert("Logged in as: " + email);
  toggleAuth();
}

function watchNow() {
  window.scrollTo({ top: document.querySelector("video").offsetTop, behavior: "smooth" });
}

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

document.getElementById("searchInput").addEventListener("input", function(e) {
  const keyword = e.target.value.toLowerCase();
  document.querySelectorAll(".movie-card").forEach(card => {
    const match = card.innerText.toLowerCase().includes(keyword);
    card.style.display = match ? "block" : "none";
  });
});

// Mock movie data integration (simulate free API call)
const movieData = [
  {
    title: "The Batman",
    year: 2022,
    poster: "https://image.tmdb.org/t/p/w300/74xTEgt7R36Fpooo50r9T25onhq.jpg"
  },
  {
    title: "Frozen II",
    year: 2019,
    poster: "https://image.tmdb.org/t/p/w300/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg"
  },
  {
    title: "Inception",
    year: 2010,
    poster: "https://image.tmdb.org/t/p/w300/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
  }
];

const movieContainer = document.getElementById("movieData");
movieData.forEach(movie => {
  const div = document.createElement("div");
  div.className = "movie-card";
  div.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <p><strong>${movie.title}</strong> (${movie.year})</p>
  `;
  movieContainer.appendChild(div);
});
