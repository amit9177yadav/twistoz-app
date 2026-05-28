import images from "./images.js";

export const topBarFeatures = [
  { id: "protein", label: "High Protein", icon: "protein" },
  { id: "maida", label: "No Maida", icon: "maida" },
  { id: "durum", label: "100% Durum Wheat", icon: "wheat" },
  { id: "colours", label: "No Artificial Colours", icon: "colours" },
];

export const navLinks = [
  { id: "home", label: "Home", href: "#home", active: true },
  { id: "products", label: "Products", href: "#products" },
  { id: "about", label: "About Us", href: "#about" },
  { id: "why", label: "Why TwisToz", href: "#why-choose" },
  { id: "recipes", label: "Recipes", href: "#recipes" },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

export const heroFeatures = [
  { id: "durum", label: "100% Durum Wheat", icon: "wheat", color: "orange" },
  {
    id: "colours",
    label: "No Artificial Colours",
    icon: "colours",
    color: "royal",
  },
  {
    id: "preservatives",
    label: "No Added Preservatives",
    icon: "preservative",
    color: "royal",
  },
  {
    id: "italian",
    label: "Authentic Italian Taste",
    icon: "italian",
    color: "orange",
  },
  { id: "love", label: "Made with Love", icon: "heart", color: "orange" },
];

export const products = [
  {
    id: "penne",
    name: "Penne Pasta",
    description:
      "Classic tube-shaped pasta perfect for rich sauces and baked Italian dishes.",
    image: images.products.penne,
  },
  {
    id: "fusilli",
    name: "Fusilli Pasta",
    description:
      "Spiral-shaped pasta that captures every drop of sauce in every twist.",
    image: images.products.fusilli,
  },
  {
    id: "macaroni",
    name: "Macaroni",
    description:
      "Small curved tubes ideal for mac & cheese and comfort food classics.",
    image: images.products.macaroni,
  },
  {
    id: "vermicelli",
    name: "Vermicelli",
    description:
      "Fine delicate strands perfect for light soups and traditional recipes.",
    image: images.products.vermicelli,
  },
  {
    id: "noodles",
    name: "Noodles",
    description:
      "Versatile noodles for stir-fries, soups, and quick everyday meals.",
    image: images.products.noodles,
  },
];

export const whyChoosePoints = [
  "Premium quality ingredients",
  "Hygienic & modern processing",
  "Authentic taste in every bite",
  "No artificial colours & preservatives",
  "Rich in protein & dietary fiber",
  "Loved by families, trusted by chefs",
];

export const durumAdvantages = [
  {
    id: "protein",
    title: "High Protein",
    description:
      "Durum wheat delivers essential protein for a wholesome, nourishing meal.",
    icon: "protein",
  },
  {
    id: "maida",
    title: "No Maida",
    description:
      "Made entirely from premium durum wheat semolina — never refined flour.",
    icon: "maida",
  },
  {
    id: "texture",
    title: "Perfect Texture",
    description:
      "Cooks to al dente perfection with excellent bite and consistency every time.",
    icon: "texture",
  },
];

export const galleryImages = [
  {
    id: 1,
    alt: "Gourmet pasta dish with fresh basil and tomatoes",
    src: images.gallery.pastaDish,
  },
  {
    id: 2,
    alt: "TwisToz state-of-the-art manufacturing facility",
    src: images.gallery.factory,
  },
  {
    id: 3,
    alt: "Expert chefs preparing premium pasta",
    src: images.gallery.kitchen,
  },
  {
    id: 4,
    alt: "Fresh noodles closeup",
    src: images.gallery.noodlesCloseup,
  },
  {
    id: 5,
    alt: "Creamy pasta bowl with herbs",
    src: images.gallery.creamyPasta,
  },
];

export const aboutHighlights = [
  { id: "durum", label: "100% Durum Wheat", icon: "wheat" },
  { id: "italian", label: "Authentic Italian Taste", icon: "italian" },
  { id: "hygiene", label: "Hygienic Processing", icon: "preservative" },
];

export const footerQuickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About Us", href: "#about" },
  { label: "Why TwisToz", href: "#why-choose" },
  { label: "Recipes", href: "#recipes" },
  { label: "Contact Us", href: "#contact" },
];

export const footerProducts = [
  { label: "Penne Pasta", href: "#products" },
  { label: "Fusilli Pasta", href: "#products" },
  { label: "Macaroni", href: "#products" },
  { label: "Vermicelli", href: "#products" },
  { label: "Noodles", href: "#products" },
];

export const contactInfo = {
  address: "63, Patharnala new guradiya, Mhow Indore (M.P.) 453441",
  phone: "8982113108",
  email: "kaithwasfood@gmail.com",
  website: "www.twistoz.com",
  socialHandle: "_twistoz_",
};

export const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    href: `https://www.facebook.com/${contactInfo.socialHandle}`,
    brandColor: "#1877F2",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: `https://www.instagram.com/${contactInfo.socialHandle}`,
    brandColor: "#E4405F",
  },
  {
    id: "youtube",
    label: "YouTube",
    href: `https://www.youtube.com/@${contactInfo.socialHandle}`,
    brandColor: "#FF0000",
  },
];

export const footerSocialLinks = [
  ...socialLinks,
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: `https://wa.me/91${contactInfo.phone}`,
    brandColor: "#25D366",
  },
];
