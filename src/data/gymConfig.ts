export const gymConfig = {
  name: 'SAH Muscle Hub',
  shortName: 'SMH',
  tagline: 'BUILD YOUR STRENGTH. TRANSFORM YOURSELF.',
  subtitle: 'Your journey to a stronger, healthier, more confident you starts at SAH Muscle Hub.',
  address: 'Joudge Courd, near TV Tower Ground',
  landmark: 'Near TV Tower Ground',
  phone: '+91 9239888245',
  phoneRaw: '+919239888245',
  whatsapp: '+91 9239888245',
  whatsappRaw: '919239888245',
  email: 'contact@sahmusclehub.com',
  openingHours: '6:00 AM – 9:00 PM daily (Subject to confirmation)',
  schedule: [
    { days: 'Monday – Saturday', hours: '6:00 AM – 9:00 PM' },
    { days: 'Sunday', hours: '6:00 AM – 1:00 PM (Special Timings)' },
  ],
  defaultWhatsAppMessage: 'Hello SAH Muscle Hub! I am interested in joining your gym. Please share your membership plans and fees.',
  getWhatsAppUrl: (customMessage?: string) => {
    const text = encodeURIComponent(customMessage || 'Hello SAH Muscle Hub! I am interested in joining your gym. Please share your membership plans and fees.');
    return `https://wa.me/919239888245?text=${text}`;
  },
};
