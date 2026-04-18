let currentListing = null;
let currentItem = null;
let currentJob = null;
let marketplaceFilter = 'all';
let credits = 340;

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
  
  if (pageId === 'all-listings') renderAllListings();
  if (pageId === 'marketplace') renderMarketplace();
  if (pageId === 'jobs') renderJobs();
  if (pageId === 'my-building') renderMyBuilding();
  if (pageId === 'start') { renderStartListings(); renderSecondHandHome(); renderJobsHome(); }
}

function renderStartListings() {
  const container = document.getElementById('start-listings');
  container.innerHTML = mockData.listings.slice(0, 4).map((item, idx) => `
    <div class="item" onclick="showListing(${idx})">
      <img src="${item.images[0]}" alt="${item.name}">
      <div class="item-text">
        <div class="item-title">${item.name}</div>
        <div class="item-desc">${item.area} • ${item.type}</div>
        <div class="item-price">KSh ${item.price.toLocaleString()}</div>
        <div class="badge" style="display:inline-block;">⭐ ${item.rating}/5</div>
      </div>
    </div>
  `).join('');
}

function renderSecondHandHome() {
  const container = document.getElementById('second-hand-home');
  container.innerHTML = mockData.secondHandItems.slice(0, 4).map((item, idx) => `
    <div class="item" onclick="showItem(${idx})">
      <img src="${item.image}" alt="${item.name}">
      <div class="item-text">
        <div class="item-title">${item.name}</div>
        <div class="item-desc">${item.seller} • ${item.distance}</div>
        <div class="item-price">KSh ${item.price.toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}

function renderJobsHome() {
  const container = document.getElementById('jobs-home');
  container.innerHTML = mockData.jobs.slice(0, 3).map((job, idx) => `
    <div class="card" style="cursor:pointer; transition:all 0.2s;" onclick="showJob(${idx})">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <span style="font-size:18px;">${job.icon}</span>
        <span class="badge" style="display:inline-block;">${job.verified ? '✓ Verified' : 'Pending'}</span>
      </div>
      <h3 style="margin:0 0 4px; color:var(--dark); font-weight:800; font-size:14px;">${job.title}</h3>
      <div style="font-size:16px; font-weight:800; color:var(--primary);">KSh ${job.salary.toLocaleString()}${job.period}</div>
      <small style="color:#666;">${job.employer}</small>
    </div>
  `).join('');
}

function renderAllListings() {
  const container = document.getElementById('grid-view');
  container.innerHTML = mockData.listings.map((item, idx) => `
    <div class="item" onclick="showListing(${idx})">
      <img src="${item.images[0]}" alt="${item.name}">
      <div class="item-text">
        <div class="item-title">${item.name}</div>
        <div class="item-desc">${item.area} • ${item.type}</div>
        <div class="item-price">KSh ${item.price.toLocaleString()}</div>
        <div class="badge" style="display:inline-block;">${item.verified ? '✓' : '⏳'} ${item.rating}/5</div>
      </div>
    </div>
  `).join('');
}

function renderMarketplace() {
  const container = document.getElementById('marketplace-grid');
  const filtered = marketplaceFilter === 'all' ? mockData.secondHandItems : mockData.secondHandItems.filter(i => i.category === marketplaceFilter);
  container.innerHTML = filtered.map((item, idx) => `
    <div class="item" onclick="showItem(${mockData.secondHandItems.indexOf(item)})">
      <img src="${item.image}" alt="${item.name}">
      <div class="item-text">
        <div class="item-title">${item.name}</div>
        <div class="item-desc">${item.seller} • ${item.distance}</div>
        <div class="item-price">KSh ${item.price.toLocaleString()}</div>
      </div>
    </div>
  `).join('');
}

function renderJobs() {
  const container = document.getElementById('jobs-grid');
  container.innerHTML = mockData.jobs.map((job, idx) => `
    <div class="card" style="cursor:pointer; margin-bottom:12px;" onclick="showJob(${idx})">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="font-size:24px;">${job.icon}</span>
        <span class="badge" style="display:inline-block;">${job.verified ? '✓ Verified' : 'Pending'}</span>
      </div>
      <h3 style="margin:0 0 6px; color:var(--dark); font-weight:800; font-size:16px;">${job.title}</h3>
      <div style="font-size:18px; font-weight:800; color:var(--primary); margin-bottom:6px;">KSh ${job.salary.toLocaleString()}${job.period}</div>
      <p style="text-align:left; margin:0; color:#666; font-size:12px;">📍 ${job.location}</p>
      <p style="text-align:left; margin:4px 0 0; color:#666; font-size:12px;">👤 ${job.employer}</p>
    </div>
  `).join('');
}

function renderMyBuilding() {
  const wallContainer = document.getElementById('wall-posts');
  wallContainer.innerHTML = mockData.wallPosts.map(post => `
    <div class="card" style="margin-bottom:8px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
        <div>
          <strong style="color:var(--dark);">${post.author}</strong>
          ${post.role ? `<small style="color:#999;"> • ${post.role}</small>` : `<small style="color:#999;"> • ${post.room}</small>`}
        </div>
        <small style="color:#999;">${post.time}</small>
      </div>
      <p style="text-align:left; margin:8px 0; color:#555; font-size:12px; line-height:1.6;">${post.text}</p>
      <button class="btn-small" onclick="likPost(${post.id})">❤️ ${post.likes}</button>
    </div>
  `).join('');

  const leaderboardContainer = document.getElementById('leaderboard');
  leaderboardContainer.innerHTML = mockData.leaderboard.map(entry => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 0; border-bottom:1px solid #eee; background:${entry.isUser ? 'rgba(255,107,0,0.05)' : 'transparent'};">
      <div style="flex:1;">
        <div style="font-weight:800; color:var(--dark); font-size:14px;">#${entry.rank} ${entry.name}</div>
        ${entry.title ? `<small style="color:var(--primary);">${entry.title}</small>` : ''}
      </div>
      <div style="font-weight:800; color:var(--primary); font-size:16px;">${entry.points}</div>
    </div>
  `).join('');
}

function showListing(idx) {
  currentListing = mockData.listings[idx];
  document.getElementById('detail-img').src = currentListing.images[0];
  document.getElementById('detail-title').innerText = currentListing.name;
  document.getElementById('detail-area').innerText = `${currentListing.area} • ${currentListing.floor}`;
  document.getElementById('detail-verified').innerHTML = currentListing.verified ? '✓ Verified' : '⏳ Pending';
  document.getElementById('detail-rating').innerHTML = `⭐ ${currentListing.rating}/5 (${currentListing.reviewCount} reviews)`;
  document.getElementById('detail-price').innerText = `KSh ${currentListing.price.toLocaleString()}/month`;

  const detailsHTML = `
    <div class="details-section">
      <div class="details-label">💧 Water</div>
      <div class="details-value">${currentListing.water.status}${currentListing.water.schedule ? ` • ${currentListing.water.schedule}` : ''}</div>
    </div>
    <div class="details-section">
      <div class="details-label">⚡ Electricity</div>
      <div class="details-value">${currentListing.electricity.type} • ${currentListing.electricity.meter}</div>
    </div>
    <div class="details-section">
      <div class="details-label">📶 WiFi</div>
      <div class="details-value">${currentListing.wifi.available ? currentListing.wifi.provider : 'Not available'}</div>
    </div>
    <div class="details-section">
      <div class="details-label">🔒 Security</div>
      <div class="details-value">${currentListing.security}</div>
    </div>
  `;
  document.getElementById('details-container').innerHTML = detailsHTML;
  navigate('listing-detail');
}

function showItem(idx) {
  currentItem = mockData.secondHandItems[idx];
  document.getElementById('item-detail-img').src = currentItem.image;
  document.getElementById('item-detail-name').innerText = currentItem.name;
  document.getElementById('item-detail-condition').innerHTML = `📦 ${currentItem.condition}`;
  document.getElementById('item-detail-price').innerText = `KSh ${currentItem.price.toLocaleString()}`;
  document.getElementById('item-detail-seller').innerText = `${currentItem.seller} (${currentItem.room})`;
  document.getElementById('item-detail-location').innerText = `${currentItem.building} • ${currentItem.distance}`;
  navigate('item-detail');
}

function showJob(idx) {
  currentJob = mockData.jobs[idx];
  document.getElementById('job-detail-title').innerText = currentJob.title;
  document.getElementById('job-detail-salary').innerText = `KSh ${currentJob.salary.toLocaleString()}${currentJob.period}`;
  document.getElementById('job-detail-employer').innerText = currentJob.employer;
  document.getElementById('job-detail-location').innerText = currentJob.location;
  document.getElementById('job-detail-apps').innerText = `${currentJob.applications} applications`;
  navigate('job-detail');
}

function filterMarketplace(category) {
  marketplaceFilter = category;
  renderMarketplace();
}

function contactCaretaker() {
  alert(`☎️ Mama Akinyi\n📱 0712 345 678\n\nTap to call or WhatsApp`);
}

function unlockItemContact() {
  if (credits >= 50) {
    credits -= 50;
    alert(`🔓 Contact: ${currentItem.seller}\n📱 0789 012 345\n\n${credits} credits remaining`);
  } else {
    alert(`❌ Insufficient credits. You have ${credits} credits, need 50.`);
  }
}

function applyForJob() {
  alert(`✅ Application sent!\n\nYou will hear from ${currentJob.employer} soon.`);
}

function goToPaymentStep2() {
  document.getElementById('pay-building').innerText = currentListing.name;
  document.getElementById('pay-amount').innerText = `KSh ${currentListing.deposit.toLocaleString()}`;
  navigate('payment');
}

function postToWall() {
  const input = document.getElementById('wall-input');
  if (input.value.trim()) {
    mockData.wallPosts.unshift({
      id: mockData.wallPosts.length + 1,
      author: 'James Mwangi',
      room: 'Room 7',
      time: 'now',
      text: input.value,
      likes: 0
    });
    input.value = '';
    renderMyBuilding();
  }
}

function likPost(postId) {
  const post = mockData.wallPosts.find(p => p.id === postId);
  if (post) post.likes++;
  renderMyBuilding();
}

window.onload = () => {
  navigate('start');
};
