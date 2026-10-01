// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const chf = (n) => `CHF ${n.toLocaleString('de-CH')}.–`;

export const site = {
  name: 'ScooterLab Ticino',
  tagline: 'Riparazione e vendita di monopattini elettrici in Ticino',
  phone: '+41 76 442 02 27',
  whatsapp: '41764420227', // numero senza "+" e spazi, per il link wa.me
  email: 'info@scooterlabticino.ch',
  instagram: 'scooterlabticino',
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
    id: 'dietro', label: 'Ruota dietro', title: 'Motore',
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
// Ogni monopattino ha una pagina propria: /usato/<slug>
//   photos      file in src/assets/ — il primo è la foto principale
//   status      'disponibile' (verde), 'arrivo' (arancione), 'esaurito' (rosso)
//   year        anno di uscita del modello; year, km e condition sono facoltativi
//   video       facoltativo: link YouTube oppure file in public/video/ (es. '/video/pro2.mp4')
//   specs       scheda tecnica [etichetta, valore] — dati del produttore, TODO: verificare
//   description, work (revisione effettuata), included — TODO: testi segnaposto
export const scooters = [
  {
    slug: 'xiaomi-pro-2', model: 'Xiaomi Pro 2', photos: ['xiaomi-pro-2.png'], status: 'disponibile',
    year: 2020, km: 800, speed: '40 km/h', price: 140, condition: 'Molto buono',
    description: 'Un classico affidabile, leggero e pieghevole: perfetto per gli spostamenti in città. Revisionato nella nostra officina e pronto per la strada.',
    specs: [
      ['Motore', '300 W (picco 600 W)'],
      ['Batteria', '474 Wh'],
      ['Autonomia dichiarata', '45 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '14,2 kg'],
      ['Carico massimo', '100 kg'],
    ],
    work: ['Test capacità batteria', 'Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-4-pro', model: 'Xiaomi 4 Pro', photos: ['xiaomi-4-pro.png'], status: 'arrivo',
    year: 2022, km: 400, speed: '35 km/h', price: 200, condition: 'Molto buono',
    description: 'Ruote da 10" tubeless, più autonomia e più comfort rispetto ai modelli precedenti. Ideale per tragitti quotidiani anche lunghi.',
    specs: [
      ['Motore', '350 W (picco 700 W)'],
      ['Batteria', '446 Wh'],
      ['Autonomia dichiarata', '55 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo anteriore + disco posteriore'],
      ['Peso', '16,5 kg'],
      ['Carico massimo', '120 kg'],
    ],
    work: ['Test capacità batteria', 'Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-5-pro', model: 'Xiaomi 5 Pro', photos: ['xiaomi-5-pro.png'], status: 'esaurito',
    year: 2025, km: 200, speed: '35 km/h', price: 300, condition: 'Come nuovo',
    description: 'Il modello più recente: motore potente, sospensione anteriore e pneumatici autosigillanti. Praticamente nuovo.',
    specs: [
      ['Motore', '400 W (picco 1000 W)'],
      ['Batteria', '477 Wh'],
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless autosigillanti'],
      ['Sospensioni', 'Anteriore'],
      ['Carico massimo', '120 kg'],
    ],
    work: ['Test capacità batteria', 'Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
];

export const statusLabel = { disponibile: 'Disponibile', arrivo: 'In arrivo', esaurito: 'Non disponibile' };

// Quanto paghiamo i monopattini usati: min = condizioni scarse, max = ottime condizioni (CHF).
// Ordine delle marche nella fisarmonica; una marca appare solo se ha almeno un modello.
export const buyBrands = ['Xiaomi', 'Ninebot', 'Kukirin', 'Navee'];

// Modelli mostrati nell'ordine di questa lista. brand deve essere uno di buyBrands.
export const buyPrices = [
  { brand: 'Xiaomi', model: 'Pro 1', min: 50, max: 75 },
  { brand: 'Xiaomi', model: 'Pro 2', min: 60, max: 80 },
  { brand: 'Xiaomi', model: '3', min: 65, max: 85 },
  { brand: 'Xiaomi', model: '4', min: 90, max: 130 },
  { brand: 'Xiaomi', model: '5', min: 180, max: 220 },
  { brand: 'Xiaomi', model: '6', min: 200, max: 250 },
  // TODO: modelli e prezzi segnaposto per mostrare le altre marche.
  { brand: 'Ninebot', model: 'Max G30', min: 100, max: 150 },
  { brand: 'Kukirin', model: 'G2', min: 80, max: 120 },
  { brand: 'Navee', model: 'N65', min: 90, max: 140 },
];

export const steps = [
  { title: 'Contattaci', text: 'Chiamaci o scrivici su WhatsApp descrivendo il problema.' },
  { title: 'Diagnosi', text: 'Portaci il monopattino: lo controlliamo e ti diamo un preventivo.' },
  { title: 'Riparazione', text: 'Ripariamo con ricambi di qualità, di solito in 1–3 giorni.' },
  { title: 'Ritiro', text: 'Ti avvisiamo appena è pronto, testato e sicuro.' },
];
