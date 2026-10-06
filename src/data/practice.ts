// Business information verified against the current website and Google Maps,
// 2026-10-06. Holiday hours may differ. See docs/punch-list-status.md.
export const practice = {
  name: 'Hoffman Family Orthodontics',
  site: 'https://www.hoffmanfamilyorthodontics.com',
  phone: '+19016250202',
  phoneDisplay: '901.625.0202',
  fax: '+19014250202',
  email: 'info@hoffmanfamilyorthodontics.com',
  street: '5159 Wheelis Drive',
  city: 'Memphis', region: 'TN', postalCode: '38117',
  latitude: 35.1142387, longitude: -89.8898953,
  mapUrl: 'https://maps.app.goo.gl/JrZmSSodFu2KYgvYA',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.7173458324896!2d-89.88989529999999!3d35.1142387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f85003a897803%3A0x67daa0637152d00f!2sHoffman%20Family%20Orthodontics!5e1!3m2!1sen!2sus!4v1791308473130!5m2!1sen!2sus',
  hours: [
    { days: 'Monday–Thursday', hours: '8 a.m.–5 p.m.' },
    { days: 'Friday–Sunday', hours: 'Closed' },
  ],
};
export const practiceSchema = {
  '@type': 'Dentist', '@id': `${practice.site}/#practice`,
  name: practice.name, url: `${practice.site}/`,
  description: 'Orthodontic care for children, teens, and adults in East Memphis.',
  telephone: practice.phone, faxNumber: practice.fax, email: practice.email,
  image: `${practice.site}/assets/dr-rachel.webp`,
  logo: `${practice.site}/assets/hoffman-logo.svg`,
  address: { '@type': 'PostalAddress', streetAddress: practice.street, addressLocality: practice.city, addressRegion: practice.region, postalCode: practice.postalCode, addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: practice.latitude, longitude: practice.longitude },
  hasMap: practice.mapUrl,
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday'], opens: '08:00', closes: '17:00' }],
  sameAs: ['https://www.instagram.com/hoffmanfamilyortho/', 'https://www.facebook.com/hoffmanfamilyortho'],
  founder: { '@id': `${practice.site}/about/#dr-rachel-hoffman` },
};
export const doctorSchema = {
  '@type': 'Person', '@id': `${practice.site}/about/#dr-rachel-hoffman`,
  name: 'Dr. Rachel Hoffman', givenName: 'Rachel', familyName: 'Hoffman',
  jobTitle: 'Board-certified orthodontist', url: `${practice.site}/about/`,
  image: `${practice.site}/assets/dr-rachel.webp`,
  worksFor: { '@id': `${practice.site}/#practice` },
  alumniOf: ['University of Notre Dame','Purdue University','Indiana University School of Dentistry','Oregon Health & Science University'].map(name => ({ '@type': 'CollegeOrUniversity', name })),
};
