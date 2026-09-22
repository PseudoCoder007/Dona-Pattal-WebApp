const DEFAULT_PHONE_DIGITS = '918787201971';

export function buildWhatsAppUrl(message: string, phoneDigits: string = DEFAULT_PHONE_DIGITS): string {
  return `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
}

export function productEnquiryMessage(productName: string): string {
  return `Hello Sahlok Eco Products, I'm interested in the ${productName}. Please share wholesale pricing, availability and bulk supply details.`;
}