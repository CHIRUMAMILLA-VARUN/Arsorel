/* =============================================================
   ARSOREL — Product catalog
   -------------------------------------------------------------
   Edit this file to add / change products, prices and stories.
   - price: a number in rupees, OR null for "Price on request".
   - image: file inside /images. If the file is missing, a pretty
     branded placeholder is shown automatically.
   - story: the little tale we keep for each piece.
   ============================================================= */

const ARSOREL_CATALOG = {
  categories: [
    {
      id: "bouquets",
      name: "Bouquets",
      emoji: "💐",
      tagline: "Single-flower bouquets that never wilt",
      blurb: "Every stem is hand-twisted from pipe cleaners, petal by petal — a bloom for someone you love, made to last far longer than the moment.",
    },
    {
      id: "keychains",
      name: "Keychains",
      emoji: "🔑",
      tagline: "Tiny treasures for your everyday",
      blurb: "Little companions for your keys and bags — cheerful, pocket-sized and impossible not to smile at.",
    },
    {
      id: "home-decor",
      name: "Home Décor",
      emoji: "🏡",
      tagline: "Handmade warmth for your corners",
      blurb: "Lamps, mirrors and wall pieces dressed in handmade flowers — soft touches that make a room feel loved.",
    },
    {
      id: "custom",
      name: "Custom Orders",
      emoji: "✨",
      tagline: "Dreamed up by you, made by us",
      blurb: "Have something in mind? Choose your flowers, your colours, your style — and we'll craft it just for you.",
    },
  ],

  products: [
    /* ---------------- BOUQUETS ---------------- */
    {
      id: "lavender", category: "bouquets", name: "Lavender Bouquet", price: 209,
      image: "lavender.jpg",
      story: "A hush of purple that smells of quiet evenings. Our lavender is twisted for the ones who love calm — a little bundle of stillness that never fades.",
    },
    {
      id: "daisy", category: "bouquets", name: "Daisy Bouquet", price: 259,
      image: "daisy.jpg",
      story: "Bright, honest and forever cheerful. Daisies are for new friendships and sunny mornings — the flower that always seems to be smiling back.",
    },
    {
      id: "daffodil", category: "bouquets", name: "Daffodil Bouquet", price: 259,
      image: "daffodil.jpg",
      story: "The very first bloom of spring, folded by hand. A daffodil is a small promise that brighter days are on their way.",
    },
    {
      id: "tulip", category: "bouquets", name: "Tulip Bouquet", price: 319,
      image: "tulip.jpg",
      story: "Simple, graceful, and quietly romantic. A tulip says 'perfect love' without needing a single word.",
    },
    {
      id: "lily", category: "bouquets", name: "Lily Bouquet", price: 329,
      image: "lily.jpg",
      story: "Elegant and pure, with petals that open like a soft breath. Our lily is for the moments that deserve a little grace.",
    },
    {
      id: "sunflower", category: "bouquets", name: "Sunflower Bouquet", price: 339,
      image: "sunflower.jpg",
      story: "A pocketful of sunshine that always turns toward the light. Give a sunflower to someone who is that light for you.",
    },
    {
      id: "rose", category: "bouquets", name: "Rose Bouquet", price: 349,
      image: "rose.jpg",
      story: "The classic, reimagined petal by petal. A rose that will still be blooming on every anniversary yet to come.",
    },
    {
      id: "carnation", category: "bouquets", name: "Carnation Bouquet", price: 369,
      image: "carnation.jpg",
      story: "Ruffled, warm and full of heart. Carnations carry the softest kind of love — the everyday, always-there kind.",
    },
    {
      id: "hydrangea", category: "bouquets", name: "Hydrangea Bouquet", price: 369,
      image: "hydrangea.jpg",
      story: "A cloud of tiny blossoms gathered into one big, generous bloom. Hydrangea is a whole bouquet hiding inside a single flower.",
    },
    {
      id: "orchid", category: "bouquets", name: "Orchid Bouquet", price: 369,
      image: "orchid.jpg",
      story: "Exotic and quietly proud. An orchid is for the rare, one-of-a-kind people — as unforgettable as they are.",
    },
    {
      id: "wisteria", category: "bouquets", name: "Wisteria Bouquet", price: 419,
      image: "wisteria.jpg",
      story: "Cascading violet like a little waterfall of flowers. Wisteria is our most dreamy piece — made for the incurable romantics.",
    },

    /* ---------------- KEYCHAINS ---------------- */
    {
      id: "floral-keychain", category: "keychains", name: "Floral Keychain", price: null,
      image: "floral-keychain.jpg",
      story: "A single handmade bloom to carry everywhere. Because your keys deserve a little garden of their own.",
    },
    {
      id: "floral-bead-keychain", category: "keychains", name: "Floral & Bead Keychain", price: null,
      image: "floral-bead-keychain.jpg",
      story: "Flowers strung with glimmering beads that catch the light as you walk. Small, sparkling and entirely yours.",
    },
    {
      id: "cherry-keychain", category: "keychains", name: "Cherry Keychain", price: null,
      image: "cherry-keychain.jpg",
      story: "Two little cherries on a twist of green — sweet, playful and just the right amount of cute.",
    },
    {
      id: "bow-ribbon-keychain", category: "keychains", name: "Bow & Ribbon Keychain", price: null,
      image: "bow-ribbon-keychain.jpg",
      story: "A dainty bow that ties your day together. Soft, girly and impossible to lose in the bottom of a bag.",
    },
    {
      id: "plush-keychain", category: "keychains", name: "Plush Animal & Objects Keychain", price: null,
      image: "plush-keychain.jpg",
      story: "Tiny handmade friends and treasures to clip onto anything. Pick your favourite little character and take it along.",
    },

    /* ---------------- HOME DÉCOR ---------------- */
    {
      id: "decor-flowers", category: "home-decor", name: "Flower Arrangements", price: null,
      image: "decor-flowers.jpg",
      story: "Everlasting arrangements for the table, the shelf, the windowsill — flowers that greet you the same way every single morning.",
    },
    {
      id: "floral-lamp", category: "home-decor", name: "Floral Lamps", price: null,
      image: "floral-lamp.jpg",
      story: "Warm light wrapped in handmade petals. A gentle glow that turns any corner into a cosy one.",
    },
    {
      id: "wall-hanging", category: "home-decor", name: "Wall Hangings", price: null,
      image: "wall-hanging.jpg",
      story: "A blooming little story for your wall — handmade texture and colour where a bare space used to be.",
    },
    {
      id: "floral-bead-mirror", category: "home-decor", name: "Floral & Bead Mirror", price: null,
      image: "floral-bead-mirror.jpg",
      story: "Catch your reflection in a frame of flowers and beads. A mirror that makes getting ready feel a touch more magical.",
    },
    {
      id: "custom-decor", category: "home-decor", name: "Customised Floral Décor", price: null,
      image: "custom-decor.jpg",
      story: "Your space, your palette, your idea. Tell us the vibe and we'll flower it into being.",
    },

    /* ---------------- CUSTOM ORDERS ---------------- */
    {
      id: "byo-bouquet", category: "custom", name: "Build-Your-Own Bouquet", price: null,
      image: "byo-bouquet.jpg",
      story: "Choose the flowers you love, how many, and the wrapping — and we'll twist together a bouquet that's completely, uniquely yours. Price depends on your choices.",
    },
    {
      id: "custom-keychain", category: "custom", name: "Custom Keychain", price: null,
      image: "custom-keychain.jpg",
      story: "A little charm made to your idea — a colour, an initial, a favourite thing. Price depends on the design.",
    },
    {
      id: "custom-home-decor", category: "custom", name: "Custom Home Décor", price: null,
      image: "custom-home-decor.jpg",
      story: "A one-of-a-kind piece for your home, dreamed up together. Share a photo or an idea and we'll make it real. Price depends on the piece.",
    },
  ],
};

// Handy lookups
ARSOREL_CATALOG.byId = (id) => ARSOREL_CATALOG.products.find((p) => p.id === id);
ARSOREL_CATALOG.byCategory = (cat) => ARSOREL_CATALOG.products.filter((p) => p.category === cat);
ARSOREL_CATALOG.category = (id) => ARSOREL_CATALOG.categories.find((c) => c.id === id);

if (typeof window !== "undefined") window.ARSOREL_CATALOG = ARSOREL_CATALOG;
