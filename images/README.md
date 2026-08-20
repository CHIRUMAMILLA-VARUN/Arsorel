# Product images

Drop your product photos in this folder. Until a photo exists, the site shows
a pretty branded placeholder automatically — so you can add photos anytime.

Use these exact file names (a `.jpg` for each product):

## Bouquets
- `lavender.jpg`
- `daisy.jpg`
- `daffodil.jpg`
- `tulip.jpg`
- `lily.jpg`
- `sunflower.jpg`
- `rose.jpg`
- `carnation.jpg`
- `hydrangea.jpg`
- `orchid.jpg`
- `wisteria.jpg`

## Keychains
- `floral-keychain.jpg`
- `floral-bead-keychain.jpg`
- `cherry-keychain.jpg`
- `bow-ribbon-keychain.jpg`
- `plush-keychain.jpg`

## Home Décor
- `decor-flowers.jpg`
- `floral-lamp.jpg`
- `wall-hanging.jpg`
- `floral-bead-mirror.jpg`
- `custom-decor.jpg`

## Custom Orders
- `byo-bouquet.jpg`
- `custom-keychain.jpg`
- `custom-home-decor.jpg`

**Tips**
- Square-ish photos look best (roughly 1000×1000 px). They're auto-cropped to fit.
- Keep each photo under ~300 KB so the site stays fast (you can compress at squoosh.app).
- `upi-qr.png` is generated automatically — don't edit it by hand. Regenerate with
  `python3 tools/make_qr.py` after changing the UPI ID in `js/config.js`.
