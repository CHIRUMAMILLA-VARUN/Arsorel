/* =============================================================
   ARSOREL — cart (stored in the browser, no server needed)
   ============================================================= */

const Cart = (() => {
  const KEY = "arsorel_cart_v1";

  const read = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || []; }
    catch { return []; }
  };
  const write = (items) => {
    localStorage.setItem(KEY, JSON.stringify(items));
    if (typeof refreshCartCount === "function") refreshCartCount();
  };

  return {
    items: read,
    count() { return read().reduce((n, i) => n + i.qty, 0); },

    add(productId, qty = 1) {
      const items = read();
      const found = items.find((i) => i.id === productId);
      if (found) found.qty += qty;
      else items.push({ id: productId, qty });
      write(items);
    },

    setQty(productId, qty) {
      let items = read();
      if (qty <= 0) items = items.filter((i) => i.id !== productId);
      else {
        const it = items.find((i) => i.id === productId);
        if (it) it.qty = qty;
      }
      write(items);
    },

    remove(productId) {
      write(read().filter((i) => i.id !== productId));
    },

    clear() { write([]); },

    /* Detailed lines joined with catalog info. */
    detailed() {
      return read()
        .map((i) => {
          const p = window.ARSOREL_CATALOG.byId(i.id);
          if (!p) return null;
          return { ...p, qty: i.qty, lineTotal: p.price == null ? null : p.price * i.qty };
        })
        .filter(Boolean);
    },

    /* Sum of items that have a fixed price. */
    knownTotal() {
      return this.detailed().reduce((s, l) => s + (l.lineTotal || 0), 0);
    },

    /* Are there any "price on request" items? */
    hasRequestItems() {
      return this.detailed().some((l) => l.price == null);
    },
  };
})();

if (typeof window !== "undefined") window.Cart = Cart;
