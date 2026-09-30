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

// Zone del monopattino nello schema interattivo della sezione Riparazioni.
export const zones = [
  {
    id: 'volante', label: 'Volante', title: 'Volante e comandi',
    text: 'Leve freno, acceleratore, display e manopole: sostituzione e regolazione dei comandi.',
    parts: ['Manopole', 'Leve freno', 'Acceleratore', 'Display', 'Campanello', 'Cablaggi'],
    price: 'da CHF 25',
  },
  {
    id: 'davanti', label: 'Ruota davanti', title: 'Ruota anteriore',
    text: 'Forature, pneumatici pieni o tubeless, freno, sospensione e cuscinetti.',
    parts: ['Pneumatico', 'Cerchio', 'Freno (disco/pastiglie)', 'Sospensione', 'Cuscinetti', 'Parafango'],
    price: 'da CHF 35',
  },
  {
    id: 'dietro', label: 'Ruota dietro', title: 'Ruota posteriore e motore',
    text: 'Pneumatico, freno posteriore e motore nel mozzo: diagnosi e riparazione.',
    parts: ['Pneumatico', 'Cerchio', 'Motore', 'Freno (disco/pastiglie)', 'Cuscinetti', 'Parafango'],
    price: 'da CHF 35',
  },
  {
    id: 'scocca', label: 'Scocca', title: 'Scocca e telaio',
    text: 'Telaio, piantone, meccanismo di chiusura, pedana e cavalletto. Eliminiamo giochi e scricchiolii.',
    parts: ['Telaio', 'Piantone e chiusura', 'Pedana', 'Parafanghi', 'Cavalletto', 'Viti e fissaggi'],
    price: 'da CHF 25',
  },
  {
    id: 'elettronica', label: 'Elettronica', title: 'Batteria ed elettronica',
    text: 'Test di capacità della batteria, controller, cablaggi, luci e porta di ricarica.',
    parts: ['Batteria', 'Controller', 'Cavi e connettori', 'Sensori', 'Luci', 'Porta di ricarica'],
    price: 'su preventivo',
  },
];

// Servizi generali, fuori dallo schema.
export const services = [
  { title: 'Diagnosi completa', text: 'Controllo di batteria, motore, freni ed elettronica. Preventivo chiaro prima di ogni intervento.', price: 'da CHF 30' },
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
