export const CACHE = {
  id: "CACHE",
  store: {},

  save(key, value) {
    this.store[key] = value;
    return `CACHE_SAVE(${key})`;
  },

  load(key) {
    return this.store[key] || null;
  },

  dump() {
    return JSON.stringify(this.store, null, 2);
  }
};

