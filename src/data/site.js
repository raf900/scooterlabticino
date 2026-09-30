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
  {
    id: 'completo', label: 'Check-up', title: 'Check-up completo',
    text: 'Diagnosi di tutto il monopattino con preventivo chiaro. Tagliando completo da CHF 59.',
    parts: ['Diagnosi completa', 'Tagliando', 'Serraggi', 'Lubrificazione', 'Aggiornamento firmware', 'Pulizia'],
    price: 'da CHF 30',
  },
];

// Monopattini usati in vendita — aggiungere, modificare o rimuovere voci qui.
export const scooters = [
  // year, km e condition sono facoltativi: se mancano non vengono mostrati.
  // year = anno di uscita del modello.
  { model: 'Xiaomi Pro 2', year: 2020, km: 800, range: '45 km', price: 140, condition: 'Molto buono' },
  { model: 'Xiaomi 4 Pro', year: 2022, km: 400, range: '55 km', price: 200, condition: 'Molto buono' },
  { model: 'Xiaomi 5 Pro', year: 2025, km: 200, range: '60 km', price: 300, condition: 'Come nuovo' },
];

export const steps = [
  { title: 'Contattaci', text: 'Chiamaci o scrivici su WhatsApp descrivendo il problema.' },
  { title: 'Diagnosi', text: 'Portaci il monopattino: lo controlliamo e ti diamo un preventivo.' },
  { title: 'Riparazione', text: 'Ripariamo con ricambi di qualità, di solito in 1–3 giorni.' },
  { title: 'Ritiro', text: 'Ti avvisiamo appena è pronto, testato e sicuro.' },
];
