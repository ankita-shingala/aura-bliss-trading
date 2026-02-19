/**
 * Company contact & owner details.
 * Replace placeholders with actual details when available.
 * (No public listing found for "Aura Bliss Trading Co" — add your real info here.)
 */
export const contact = {
  owner: {
    title: 'Proprietor',
    name: '[Owner / Proprietor Name]',
  },
  address: {
    line1: '[Shop / Office No, Building Name]',
    line2: '[Street, Area / Landmark]',
    city: '[City]',
    state: '[State]',
    pin: '[PIN Code]',
  },
  phone: {
    primary: '[+91 XXXXX XXXXX]',
    secondary: null, // e.g. '+91 XXXXX XXXXX' or null
  },
  email: 'info@aurablisstrading.com',
  businessHours: {
    weekdays: '9:00 AM – 7:00 PM',
    saturday: '9:00 AM – 5:00 PM',
    sunday: 'Closed',
  },
};

export function getFullAddress() {
  const { line1, line2, city, state, pin } = contact.address;
  const parts = [line1, line2, `${city}, ${state} - ${pin}`].filter(Boolean);
  return parts.join(', ');
}
