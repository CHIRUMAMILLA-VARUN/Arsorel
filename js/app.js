/* =============================================================
   ARSOREL — shared helpers: header/footer, placeholders, toast
   ============================================================= */

const CFG = window.ARSOREL_CONFIG;
const CAT = window.ARSOREL_CATALOG;

const money = (n) => CFG.currency + Number(n).toLocaleString("en-IN");
const priceLabel = (p) =>
  p == null
    ? `<span class="price req">Price on request</span>`
    : `<span class="price">${money(p)}</span>`;

// Pretty emoji per category, used by placeholder thumbnails
const CAT_EMOJI = { bouquets: "💐", keychains: "🔑", "home-decor": "🏡", custom: "✨" };

/* A product/category thumbnail that falls back to a branded placeholder
   if the image file is missing. */
function thumbHTML(item, catId) {
  const emoji = CAT_EMOJI[catId || item.category] || "🌸";
  if (item.image) {
    // Try the real image; onerror swaps to placeholder.
    return `<img class="thumb" src="images/${item.image}" alt="${item.name}" loading="lazy"
      onerror="this.outerHTML='<div class=&quot;thumb ph&quot; data-emoji=&quot;${emoji}&quot;></div>'">`;
  }
  return `<div class="thumb ph" data-emoji="${emoji}"></div>`;
}

/* ---------- Header & footer, injected on every page ---------- */
function renderChrome() {
  const count = Cart.count();
  const header = `
  <header class="site-header"><div class="wrap">
    <a class="brand-mark" href="index.html" style="text-decoration:none">
      <span class="logo">Arsorel</span>
      <span class="sub hide-sm">Artisanal Treasures</span>
    </a>
    <nav class="nav">
      <a href="index.html#categories">Shop</a>
      <a class="hide-sm" href="index.html#about">About</a>
      <a class="cart-link" href="cart.html">🧺 Cart <span class="cart-count" id="cartCount">${count}</span></a>
    </nav>
  </div></header>`;

  const ig = CFG.instagram
    ? `<a href="https://instagram.com/${CFG.instagram}">@${CFG.instagram}</a><br>`
    : "";
  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div>
        <div class="logo">Arsorel</div>
        <p style="margin:.4rem 0;color:#c9bd9f">${CFG.craft}</p>
        <p style="margin:0;color:#c9bd9f">${CFG.motto}</p>
      </div>
      <div>
        <h4>Shop</h4>
        ${CAT.categories.map((c) => `<a href="category.html?cat=${c.id}">${c.name}</a>`).join("<br>")}
      </div>
      <div>
        <h4>Reach us</h4>
        <a href="https://wa.me/${CFG.whatsapp}">WhatsApp: ${CFG.phoneDisplay}</a><br>
        <a href="mailto:${CFG.email}">${CFG.email}</a><br>
        ${ig}
      </div>
    </div>
    <div class="copy">© ${new Date().getFullYear()} Arsorel · ${CFG.tagline} · Handmade with love in India</div>
  </footer>`;

  const h = document.getElementById("site-header-slot");
  const f = document.getElementById("site-footer-slot");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;
}

function refreshCartCount() {
  const el = document.getElementById("cartCount");
  if (el) el.textContent = Cart.count();
}

/* ---------- Toast ---------- */
let _toastTimer;
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// Read ?key= from the URL
const qs = (key) => new URLSearchParams(location.search).get(key);

document.addEventListener("DOMContentLoaded", renderChrome);
