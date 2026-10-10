// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const chf = (n) => `CHF ${n.toLocaleString('de-CH')}.–`;

export const site = {
  name: 'ScooterLab Ticino',
  tagline: 'Riparazione e vendita di monopattini elettrici in Ticino',
  phone: '+41 79 453 05 76',
  whatsapp: '41794530576', // numero senza "+" e spazi, per il link wa.me
  email: 'info@scooterlabticino.ch',
  instagram: 'scooterlabticino',
  hours: [
    ['Lun – Ven', '09:00 – 12:00 · 14:00 – 18:30'], // TODO
    ['Sabato', '09:00 – 16:00'],
    ['Domenica', 'Chiuso'],
  ],
};

// Zone del monopattino nello schema interattivo della sezione Riparazioni (l'ordine dà la numerazione).
export const zones = [
  {
    id: 'volante', label: 'Volante', title: 'Volante e comandi',
    text: 'Leve freno, acceleratore, display e manopole: sostituzione e regolazione dei comandi.',
    parts: ['Manopole', 'Freno', 'Acceleratore', 'Display', 'Cover', 'Campanello', 'Cablaggi interni'],
  },
  {
    id: 'scocca', label: 'Scocca', title: 'Scocca e telaio',
    text: 'Telaio, meccanismo di chiusura, pedana e cavalletto. Eliminiamo giochi e scricchiolii.',
    parts: ['Telaio', 'Chiusura', 'Pedana', 'Parafanghi', 'Cavalletto', 'Viti e fissaggi'],
  },
  {
    id: 'davanti', label: 'Ruota davanti', title: 'Ruota anteriore',
    text: 'Forature, pneumatici pieni o tubeless, freno, sospensione e cuscinetti.',
    parts: ['Pneumatico', 'Cerchio', 'Freno (disco/pastiglie)', 'Sospensione', 'Cuscinetti', 'Parafango', 'Motore', 'Cablaggi', 'Coperchi laterali'],
  },
  {
    id: 'dietro', label: 'Ruota posteriore', title: 'Ruota posteriore',
    text: 'Pneumatico, freno posteriore e motore nel mozzo: diagnosi e riparazione.',
    parts: ['Pneumatico', 'Cerchio', 'Motore', 'Freno (disco/pastiglie)', 'Cuscinetti', 'Parafango', 'Sospensione', 'Cablaggi', 'Coperchi laterali'],
  },
  {
    id: 'elettronica', label: 'Elettronica', title: 'Batteria ed elettronica',
    text: 'Test di capacità della batteria, controller, cablaggi, luci e porta di ricarica.',
    parts: ['Batteria', 'Controller', 'Cavi e connettori', 'Sensori', 'Luci', 'Porta di ricarica'],
  },
  {
    id: 'completo', label: 'Check-up', title: 'Check-up completo',
    text: 'Diagnosi di tutto il monopattino con preventivo chiaro.',
    parts: ['Diagnosi completa', 'Lubrificazione', 'Aggiornamento firmware', 'Pulizia', 'Eliminazione rumori', 'Manutenzione stagionale'],
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
      ['Batteria', '36 V – 474 Wh (salute 92%)'], // TODO: stato reale
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
    slug: 'xiaomi-4-pro', model: 'Xiaomi 4 Pro', photos: ['xiaomi-4-pro.png'], status: 'disponibile',
    year: 2024, km: 400, speed: '35 km/h', price: 200, condition: 'Molto buono',
    description: 'Ruote da 10" tubeless, più autonomia e più comfort rispetto ai modelli precedenti. Ideale per tragitti quotidiani anche lunghi.',
    // Dati ufficiali Xiaomi 4 Pro (2nd Gen), versione a 48 V.
    specs: [
      ['Motore', '400 W (picco 1000 W)'],
      ['Batteria', '48 V – 468 Wh (salute 96%)'], // TODO: salute reale
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Peso', '19 kg'],
      ['Carico massimo', '120 kg'],
    ],
    work: ['Test capacità batteria', 'Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-5-pro', model: 'Xiaomi 5 Pro', photos: ['xiaomi-5-pro.png'], status: 'disponibile',
    year: 2025, km: 200, speed: '35 km/h', price: 300, condition: 'Come nuovo',
    description: 'Il modello più recente: motore potente, grande autonomia e pneumatici larghi da 10". Praticamente nuovo.',
    // Dati ufficiali Xiaomi 5 Pro.
    specs: [
      ['Motore', '400 W (picco 1000 W)'],
      ['Batteria', '48 V – 477 Wh (salute 99%)'], // TODO: salute reale
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Peso', '22,4 kg'],
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
  { brand: 'Xiaomi', model: 'Scooter 1', min: 50, max: 75 },
  { brand: 'Xiaomi', model: 'Scooter 2', min: 60, max: 80 },
  { brand: 'Xiaomi', model: 'Scooter 3', min: 65, max: 85 },
  { brand: 'Xiaomi', model: 'Scooter 4', min: 90, max: 130 },
  { brand: 'Xiaomi', model: 'Scooter 5', min: 180, max: 220 },
  { brand: 'Xiaomi', model: 'Scooter 6', min: 200, max: 250 },
  // TODO: modelli e prezzi segnaposto per mostrare le altre marche.
  { brand: 'Ninebot', model: 'Max G30', min: 100, max: 150 },
  { brand: 'Kukirin', model: 'G2', min: 80, max: 120 },
  { brand: 'Navee', model: 'N65', min: 90, max: 140 },
];

// Recensioni dei clienti
export const reviews = [
  { name: "Marco", stars: 5, text: "Ho portato il monopattino perché non frenava più bene. Mi hanno spiegato subito cosa c'era da fare e il prezzo prima di iniziare. Lavoro fatto bene e in tempi rapidi. Finalmente un servizio serio." },
  { name: "Alessandro", stars: 4, text: "Il monopattino aveva un problema alla batteria. Ci è voluto qualche giorno in più del previsto per trovare il ricambio, però mi hanno tenuto aggiornato e alla fine hanno risolto il problema. Prezzo nella norma e personale disponibile." },
  { name: "Luca", stars: 3, text: "Riparazione fatta bene e monopattino funzionante, però ho dovuto aspettare un po' più del previsto. Alla fine comunque sono soddisfatto del risultato." },
  { name: "Sara", stars: 5, text: "Ho avuto un problema con la ruota posteriore e ho contattato il servizio tramite messaggio. Mi hanno risposto velocemente e spiegato il possibile problema. Riparazione fatta senza sorprese sul prezzo. Lo consiglio." },
  { name: "Matteo", stars: 4, text: "Dopo una caduta avevo il manubrio storto e alcuni pezzi rovinati. Hanno controllato tutto e mi hanno fatto un preventivo prima di procedere. Lavoro ben fatto, anche se ho dovuto aspettare qualche giorno per la riconsegna." },
  { name: "Giulia", stars: 3, text: "Esperienza abbastanza positiva. Il problema al monopattino è stato risolto e ora funziona bene. Avrei preferito avere qualche aggiornamento in più durante la riparazione, ma comunque il risultato finale è buono." },
  { name: "Davide", stars: 5, text: "Il monopattino non si accendeva più e pensavo fosse da buttare. Invece hanno trovato il guasto e sono riusciti a ripararlo senza farmi cambiare componenti inutilmente. Ho speso molto meno di quanto pensassi." },
  { name: "Elena", stars: 4, text: "Ho fatto sostituire pneumatico e camera d'aria. Servizio veloce e prezzo corretto. Unico piccolo difetto ho dovuto aspettare un giorno in più perché arrivasse il pezzo, ma mi avevano avvisato." },
  { name: "Fabio", stars: 3, text: "Il monopattino aveva diversi problemi e ho deciso di farlo controllare. La riparazione è stata fatta bene, anche se il prezzo finale è stato un po' più alto di quello che avevo inizialmente immaginato. Comunque ora funziona bene." },
  { name: "Andrea", stars: 5, text: "Molto soddisfatto. Avevo problemi con l'acceleratore e il monopattino a volte si bloccava. Hanno individuato il problema e me l'hanno restituito perfettamente funzionante. Comunicazione chiara e prezzo onesto." },
  { name: "Simone", stars: 4, text: "Ho portato il monopattino per un controllo generale prima di partire per un viaggio. Hanno trovato un paio di cose da sistemare che non avevo notato. Ci è voluto un po' più tempo, ma preferisco aspettare e avere un lavoro fatto bene." },
];

export const steps = [
  { title: 'Contattaci', text: 'Chiamaci o scrivici su WhatsApp descrivendo il problema.' },
  { title: 'Diagnosi', text: 'Portaci il monopattino: lo controlliamo e ti diamo un preventivo.' },
  { title: 'Riparazione', text: 'Ripariamo con ricambi di qualità, di solito in 1–2 giorni.' },
  { title: 'Ritiro', text: 'Ti avvisiamo appena è pronto, testato e sicuro.' },
];
