# Arsorel — The Artisanal Treasures 🌸

The website for **Arsorel**, a handmade pipe-cleaner flowers, bouquets, keychains
and home-décor business. *Hand-carved · Hand-twisted · Hand-made — Made to be cherished.*

It's a plain **static website** (HTML + CSS + a little JavaScript), so it runs
for **free** on GitHub Pages — no server and no monthly cost.

## 🌐 Live site

> https://sauphyra-afk.github.io/Arsorel/

## What's inside
| File | What it is |
|------|------------|
| `index.html` | Home — brand story, "about us", and the four collections |
| `category.html` | A collection's products (opens with `?cat=bouquets` etc.) |
| `product.html` | One product — photo, price, its little story, and similar items |
| `cart.html` | The cart, custom-request box, and delivery details |
| `payment.html` | UPI payment (QR + ID) and WhatsApp order confirmation |
| `js/config.js` | ⭐ **The one file to edit** — contact, Instagram, UPI ID |
| `js/data.js` | The product catalog — names, prices, stories |
| `css/style.css` | All the styling |
| `images/` | Product photos (branded placeholders show until you add them) |
| `tools/make_qr.py` | Regenerates the UPI payment QR |

## ✏️ How to update things

**Change contact info / UPI ID:** edit `js/config.js`. If you change the UPI ID,
regenerate the QR:
```bash
pip install "qrcode[pil]"      # one time
python3 tools/make_qr.py
```

**Add / edit products or prices or stories:** edit `js/data.js`.

**Add product photos:** drop `.jpg` files into `images/` — see `images/README.md`
for the exact file names.

## 💳 About payments
Version 1 uses **UPI**, so money goes **straight to Arsorel's bank account with no
fees and no payment-gateway subscription**. The customer pays by scanning the QR (or
using the UPI ID), then sends the order + payment screenshot on WhatsApp for
confirmation.

Fully automatic "verified on the page" payments need a small backend + gateway,
which we can add later without rebuilding the site — the code is structured for it.

---
Made with 💛 for Arsorel.
