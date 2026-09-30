// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const site = {
  name: 'ScooterLab Ticino',
  tagline: 'Riparazione e vendita di monopattini elettrici in Ticino',
  phone: '+41 91 000 00 00', // TODO
  whatsapp: '41910000000', // TODO: numero senza "+" e spazi, per il link wa.me
  email: 'info@scooterlabticino.ch',
  address: 'Via Esempio 1, 6900 Lugano', // TODO
  mapsUrl: 'https://maps.google.com/?q=Lugano', // TODO
  hours: [
    ['Lun – Ven', '09:00 – 12:00 · 14:00 – 18:30'], // TODO
    ['Sabato', '09:00 – 16:00'],
    ['Domenica', 'Chiuso'],
  ],
};

export const services = [
  { title: 'Diagnosi completa', text: 'Controllo di batteria, motore, freni ed elettronica. Preventivo chiaro prima di ogni intervento.', price: 'da CHF 30' },
  { title: 'Forature e pneumatici', text: 'Sostituzione di camere d’aria e pneumatici pieni o tubeless, per tutte le misure più comuni.', price: 'da CHF 35' },
  { title: 'Freni', text: 'Regolazione e sostituzione di pastiglie, dischi e cavi per frenate sicure.', price: 'da CHF 25' },
  { title: 'Batterie', text: 'Test di capacità, riparazione e sostituzione di pacchi batteria.', price: 'su preventivo' },
  { title: 'Elettronica', text: 'Centraline, display, acceleratori, cablaggi e connettori.', price: 'su preventivo' },
  { title: 'Tagliando', text: 'Manutenzione completa: serraggi, lubrificazione, aggiornamento firmware e pulizia.', price: 'da CHF 59' },
];

// Monopattini usati in vendita — aggiungere, modificare o rimuovere voci qui.
export const scooters = [
  { model: 'Xiaomi Mi Electric Scooter 4 Pro', year: 2023, km: 1200, range: '45 km', price: 390, condition: 'Ottimo' },
  { model: 'Segway Ninebot MAX G30', year: 2022, km: 2800, range: '65 km', price: 450, condition: 'Buono' },
  { model: 'Segway Ninebot E2 Plus', year: 2024, km: 300, range: '25 km', price: 260, condition: 'Come nuovo' },
];

export const steps = [
  { title: 'Contattaci', text: 'Chiamaci o scrivici su WhatsApp descrivendo il problema.' },
  { title: 'Diagnosi', text: 'Portaci il monopattino: lo controlliamo e ti diamo un preventivo.' },
  { title: 'Riparazione', text: 'Ripariamo con ricambi di qualità, di solito in 1–3 giorni.' },
  { title: 'Ritiro', text: 'Ti avvisiamo appena è pronto, testato e sicuro.' },
];
