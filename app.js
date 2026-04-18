function renderListings(data = listings) {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  data.forEach(item => {
    feed.innerHTML += `
      <div class="card">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <strong>${item.price}</strong>
        <button onclick="openListing('${item.title}', '${item.desc}')">
          View Details
        </button>
      </div>
    `;
  });
}

function searchListings() {
  const value = document.getElementById("searchInput").value.toLowerCase();

  const filtered = listings.filter(item =>
    item.title.toLowerCase().includes(value) ||
    item.desc.toLowerCase().includes(value)
  );

  renderListings(filtered);
}

function openListing(title, desc) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// INIT APP
window.onload = () => {
  renderListings();
};
