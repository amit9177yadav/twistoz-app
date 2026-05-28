// Verified working image URLs (tested May 2026)
const unsplash = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const images = {
  // Premium vermicelli — fine golden strands, light & clean
  hero: unsplash('1612929633738-8fe44f7ec841', 900, 850),
  // Soft creamy pasta for Why Choose section
  whyChoose: unsplash('1551183053-bf91a1d81141', 700, 700),

  products: {
    penne: unsplash('1621996346565-e3dbc646d9a9', 500, 500),
    fusilli: unsplash('1551183053-bf91a1d81141', 500, 500),
    macaroni: unsplash('1512058564366-18510be2db19', 500, 500),
    vermicelli: unsplash('1612929633738-8fe44f7ec841', 500, 500),
    noodles: unsplash('1612929633738-8fe44f7ec841', 500, 500),
  },

  gallery: {
    pastaDish: unsplash('1504674900247-0877df9cc836', 700, 480),
    factory: unsplash('1586528116311-ad8dd3c8310d', 700, 480),
    kitchen: unsplash('1556910103-1c02745aae4d', 700, 480),
    noodlesCloseup: unsplash('1612929633738-8fe44f7ec841', 700, 480),
    creamyPasta: unsplash('1551892374-ecf8754cf8b0', 700, 480),
  },

  // Fallback if any image fails to load
  fallback: unsplash('1612929633738-8fe44f7ec841', 600, 400),
};

export default images;
