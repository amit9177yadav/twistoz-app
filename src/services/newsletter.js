const STORAGE_KEY = 'twistoz_newsletter_subscribers';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function getStoredSubscribers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveSubscriber(email) {
  const subscribers = getStoredSubscribers();
  const normalized = email.trim().toLowerCase();

  if (subscribers.includes(normalized)) {
    return { ok: false, code: 'already_subscribed' };
  }

  subscribers.push(normalized);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(subscribers));
  return { ok: true };
}

/**
 * Subscribe to newsletter.
 * Uses localStorage until a real API is connected.
 * Replace the demo block with your API call when ready.
 */
export async function subscribeToNewsletter(email) {
  const trimmed = email.trim();

  if (!trimmed || !isValidEmail(trimmed)) {
    return { ok: false, code: 'invalid_email' };
  }

  // --- Future API (uncomment when backend is ready) ---
  // const res = await fetch('/api/newsletter/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email: trimmed }),
  // });
  // if (!res.ok) return { ok: false, code: 'server_error' };
  // return { ok: true };

  // Demo: save locally in the browser
  await new Promise((r) => setTimeout(r, 400));
  return saveSubscriber(trimmed);
}

export const newsletterMessages = {
  success: "Thank you! You're subscribed to TwisToz updates.",
  already_subscribed: "You're already subscribed with this email.",
  invalid_email: 'Please enter a valid email address.',
  server_error: 'Something went wrong. Please try again later.',
};
