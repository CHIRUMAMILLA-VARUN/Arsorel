/* =============================================================
   ARSOREL — Business configuration
   -------------------------------------------------------------
   This is the ONE file you edit to update contact / payment info.
   No other code needs to change. After editing `upiId` below,
   regenerate the payment QR with:  python3 tools/make_qr.py
   ============================================================= */

const ARSOREL_CONFIG = {
  brand:    "Arsorel",
  tagline:  "The Artisanal Treasures",
  motto:    "Made to be cherished",
  craft:    "Hand-carved · Hand-twisted · Hand-made",

  // TODO(owner): put the real year you started here.
  foundedYear: "2025",

  // Contact (from your brochure)
  whatsapp:     "916305058397",      // digits only, with country code, no + or spaces
  phoneDisplay: "+91 63050 58397",
  email:        "sauphyra@gmail.com",
  instagram:    "thearsorel",        // instagram.com/thearsorel

  // Payment (UPI — money goes straight to your bank, no fees)
  upiId:   "sauju.cyme@oksbi",
  upiName: "Arsorel",

  currency: "₹",
};

// Make available to plain <script> pages
if (typeof window !== "undefined") window.ARSOREL_CONFIG = ARSOREL_CONFIG;
