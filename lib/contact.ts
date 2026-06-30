const whatsAppNumber = "917091275398";

export const contact = {
  brand: "FuturePath Advisory",
  phoneDisplay: "+91 70912 75398",
  phoneHref: "tel:+917091275398",
  email: "hello@futurepath.in",
  emailHref: "mailto:hello@futurepath.in",
  location: "Patna, Bihar, India",
  whatsAppNumber,
};

export function buildWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${whatsAppNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
