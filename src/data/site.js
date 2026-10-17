// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const chf = (n) => (n == null ? 'Prezzo su richiesta' : `CHF ${n.toLocaleString('de-CH')}.–`);

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
//   price       prezzo di vendita in CHF; null = "Prezzo su richiesta"
//   diagnosi    dati letti dal monopattino (chip, batteria, cicli, tempi) — campi facoltativi
//   ricambi     ricambi sostituiti o migliorati: ['Nome', prezzo] (prezzo facoltativo)
//   punteggio   valutazione ScooterLab da 1 a 10: { totale, batteria, freni, gomme, estetica, elettronica }
//   velocita    velocità legale su strada (20 km/h in Svizzera); velocitaMax tra parentesi "strade private"
//   photoCredit autore e licenza della foto, se presa da internet
//   video       facoltativo: link YouTube oppure file in public/video/ (es. '/video/pro2.mp4')
//   specs       scheda tecnica [etichetta, valore] — dati del produttore, TODO: verificare
//   description, work (revisione effettuata), included — TODO: testi segnaposto
export const scooters = [
  {
    slug: 'xiaomi-essential', model: 'Xiaomi Essential', photos: ['xiaomi-essential-1.webp', 'xiaomi-essential-2.webp', 'xiaomi-essential-3.webp', 'xiaomi-essential-4.webp', 'xiaomi-essential-5.webp'], status: 'disponibile',
    year: 2022, km: 70, price: 140, condition: 'Come nuovo',
    velocita: 20, velocitaMax: '40 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'GD32E', dataBatteria: '01.11.2022', saluteBatteria: 98, cicliInteri: 8, cicliParziali: 14, tempoAcceso: '12 h 4 min', tempoGuida: '6 h 10 min' },
    specs: [
      ['Motore', '250 W'],
      ['Batteria', '36 V – 5100 mAh'],
      ['Autonomia dichiarata', '20 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '12 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '108 × 43 × 114 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-1s', model: 'Xiaomi 1S', photos: ['xiaomi-1s-1.webp', 'xiaomi-1s-2.webp', 'xiaomi-1s-3.png', 'xiaomi-1s-4.png', 'xiaomi-1s-5.png', 'xiaomi-1s-6.png', 'xiaomi-1s-7.webp'], status: 'disponibile',
    year: 2020, km: 800, price: 150, condition: 'Molto buono',
    velocita: 20, velocitaMax: '40 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { saluteBatteria: 92 } /* TODO: dati diagnosi reali */,
    specs: [
      ['Motore', '250 W'],
      ['Batteria', '36 V – 7650 mAh'],
      ['Autonomia dichiarata', '30 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '12,5 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '108 × 43 × 114 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-pro', model: 'Xiaomi Pro', photos: ['xiaomi-pro-1.png', 'xiaomi-pro-2.png', 'xiaomi-pro-3.png', 'xiaomi-pro-4.png', 'xiaomi-pro-5.png', 'xiaomi-pro-6.png'], status: 'disponibile',
    year: 2019, km: 1115, price: 150, condition: 'Molto buono',
    velocita: 20, velocitaMax: '45 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'STM32F', dataBatteria: '30.05.2019', saluteBatteria: 98, cicliInteri: 55, cicliParziali: 148, tempoAcceso: '23 g 12 h 8 min', tempoGuida: '6 g 20 h 19 min' },
    specs: [
      ['Motore', '300 W'],
      ['Batteria', '36 V – 474 Wh'],
      ['Autonomia dichiarata', '45 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '14,2 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '113 × 43 × 118 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-pro-2', model: 'Xiaomi Pro 2', photos: ['xiaomi-pro-1.png', 'xiaomi-pro-2.png', 'xiaomi-pro-3.png', 'xiaomi-pro-4.png', 'xiaomi-pro-5.png', 'xiaomi-pro-6.png'], status: 'disponibile',
    year: 2021, km: 900, price: 160, condition: 'Molto buono',
    velocita: 20, velocitaMax: '45 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { chip: 'STM32F', dataBatteria: '04.10.2021', saluteBatteria: 98, cicliInteri: 92, cicliParziali: 252, tempoAcceso: '23 g 12 h 7 min', tempoGuida: '7 g 17 h 1 min' },
    specs: [
      ['Motore', '300 W (picco 600 W)'],
      ['Batteria', '36 V – 474 Wh'],
      ['Autonomia dichiarata', '45 km'],
      ['Pneumatici', '8,5" con camera d’aria'],
      ['Freni', 'Disco posteriore + E-ABS anteriore'],
      ['Peso', '14,2 kg'],
      ['Carico massimo', '100 kg'],
      ['Dimensioni (aperto)', '113 × 43 × 118 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-4-pro', model: 'Xiaomi 4 Pro (2nd Gen)', photos: ['xiaomi-4-pro-1.png', 'xiaomi-4-pro-2.png', 'xiaomi-4-pro-3.png', 'xiaomi-4-pro-4.png', 'xiaomi-4-pro-5.png', 'xiaomi-4-pro-6.png', 'xiaomi-4-pro-7.png', 'xiaomi-4-pro-8.webp'], status: 'disponibile',
    year: 2025, km: 1500, price: 200, condition: 'Molto buono',
    velocita: 20, velocitaMax: '30 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { dataBatteria: '02.01.2024', saluteBatteria: 98, cicliInteri: 51, tempoUtilizzo: '562 giorni' },
    specs: [
      ['Motore', '400 W (picco 1000 W)'],
      ['Batteria', '48 V – 468 Wh'],
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Peso', '19 kg'],
      ['Carico massimo', '120 kg'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
  {
    slug: 'xiaomi-5', model: 'Xiaomi 5', photos: ['xiaomi-5-1.png', 'xiaomi-5-2.png', 'xiaomi-5-3.png', 'xiaomi-5-4.png', 'xiaomi-5-5.png', 'xiaomi-5-6.png'], status: 'disponibile',
    year: 2025, km: 2100, price: 300, condition: 'Come nuovo',
    velocita: 20, velocitaMax: '30 km/h', // 20 km/h = limite legale su strada; velocitaMax su strade private
    diagnosi: { dataBatteria: '26.02.2025', saluteBatteria: 98, cicliInteri: 55, tempoUtilizzo: '463 giorni' },
    specs: [
      ['Motore', '350 W (picco 700 W)'],
      ['Batteria', '477 Wh (10,2 Ah)'],
      ['Autonomia dichiarata', '60 km'],
      ['Pneumatici', '10" tubeless'],
      ['Freni', 'Tamburo + E-ABS'],
      ['Sospensioni', 'Anteriore'],
      ['Peso', '20,1 kg'],
      ['Carico massimo', '120 kg'],
      ['Dimensioni (aperto)', '114 × 57 × 128 cm'],
    ],
    // TODO: ricambi montati ['Nome', prezzo] e punteggio { totale, batteria, freni, gomme, estetica, elettronica }
    ricambi: [],
    punteggio: null,
    work: ['Controllo e regolazione freni', 'Controllo pneumatici', 'Serraggio di tutte le viti', 'Prova su strada'],
    included: ['Caricatore', '6 mesi di garanzia'],
    video: '',
  },
];

// "20 km/h (45 km/h strade private)"
export const speedLabel = (sc) => `${sc.velocita} km/h` + (sc.velocitaMax ? ` (${sc.velocitaMax} strade private)` : '');
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

// Listino ricambi (pagina Riparazioni), dall'alto verso il basso del monopattino.
// prezzo = CHF del ricambio ("da"), minuti = tempo di lavoro per montarlo.
// Gomme e camere d'aria hanno un prezzo fisso con il montaggio compreso (0 minuti).
// con / prezzoCon / minutiCon (facoltativi): prezzo e tempo ridotti se nella stessa sezione è scelto anche quel ricambio
// (es. la camera d'aria costa CHF 5 e non richiede lavoro in più se si cambia anche la gomma).
// zone = parte dello schema che si accende.
export const partsList = [
  { title: 'Volante', zone: 'volante', parts: [
    { nome: 'Manopole', prezzo: 10, minuti: 15 },
    { nome: 'Campanello', prezzo: 7, minuti: 15 },
    { nome: 'Freno destro', prezzo: 15, minuti: 15 },
    { nome: 'Freno sinistro', prezzo: 15, minuti: 15 },
    { nome: 'Cavo freno', prezzo: 10, minuti: 15 },
    { nome: 'Acceleratore', prezzo: 7, minuti: 15 },
    { nome: 'Luce', prezzo: 7, minuti: 15 },
    { nome: 'Schermo', prezzo: 15, minuti: 15 },
    { nome: 'Copertura schermo', prezzo: 3, minuti: 15 },
    { nome: 'Ferro volante', prezzo: 20, minuti: 30 },
  ] },
  { title: 'Tubo', zone: 'scocca', parts: [
    { nome: 'Viti di fissaggio', prezzo: 3, minuti: 15 },
    { nome: 'Sistema di chiusura', prezzo: 40, minuti: 30 },
    { nome: 'Gommini di copertura', prezzo: 3, minuti: 15 },
    { nome: 'Cuscinetti', prezzo: 10, minuti: 30 },
  ] },
  { title: 'Ruota davanti', zone: 'davanti', parts: [
    { nome: "Camera d'aria", prezzo: 25, minuti: 0, con: 'Gomma', prezzoCon: 5, minutiCon: 0 },
    { nome: 'Gomma', prezzo: 35, minuti: 0 },
    { nome: 'Ferro ruota', prezzo: 30, minuti: 30 },
    { nome: 'Motore', prezzo: 75, minuti: 30 },
    { nome: 'Cavo motore', prezzo: 10, minuti: 60 },
    { nome: 'Coperchi laterali', prezzo: 3, minuti: 15 },
    { nome: 'Parafango', prezzo: 10, minuti: 15 },
    { nome: 'Disco freno', prezzo: 10, minuti: 15 },
    { nome: 'Pastiglie freno', prezzo: 10, minuti: 15 },
    { nome: 'Pinza freno', prezzo: 10, minuti: 15 },
    { nome: 'Sospensione', prezzo: 20, minuti: 15 },
    { nome: 'Luce anteriore', prezzo: 10, minuti: 15 },
    { nome: 'Cuscinetti', prezzo: 10, minuti: 60 },
  ] },
  { title: 'Pedana e telaio', zone: 'scocca', parts: [
    { nome: 'Tappetino pedana', prezzo: 10, minuti: 30 },
    { nome: 'Cavalletto', prezzo: 10, minuti: 15 },
    { nome: 'Coperchio inferiore', prezzo: 10, minuti: 15 },
    { nome: 'Viti pedana', prezzo: 3, minuti: 15 },
    { nome: 'Cavi interni', prezzo: 10, minuti: 60 },
  ] },
  { title: 'Ruota dietro', zone: 'dietro', parts: [
    { nome: "Camera d'aria", prezzo: 25, minuti: 0, con: 'Gomma', prezzoCon: 5, minutiCon: 0 },
    { nome: 'Gomma', prezzo: 35, minuti: 0 },
    { nome: 'Ferro ruota', prezzo: 30, minuti: 30 },
    { nome: 'Motore', prezzo: 75, minuti: 30 },
    { nome: 'Cavo motore', prezzo: 10, minuti: 60 },
    { nome: 'Disco freno', prezzo: 10, minuti: 15 },
    { nome: 'Pastiglie freno', prezzo: 10, minuti: 15 },
    { nome: 'Pinza freno', prezzo: 10, minuti: 15 },
    { nome: 'Parafango', prezzo: 15, minuti: 15 },
    { nome: 'Fanale posteriore', prezzo: 10, minuti: 15 },
    { nome: 'Sospensione', prezzo: 35, minuti: 15 },
    { nome: 'Coperchi laterali', prezzo: 3, minuti: 15 },
    { nome: 'Cuscinetti', prezzo: 10, minuti: 60 },
  ] },
  { title: 'Batteria ed elettronica', zone: 'elettronica', parts: [
    { nome: 'Batteria', prezzo: 350, minuti: 30 },
    { nome: 'Controller', prezzo: 40, minuti: 30 },
    { nome: 'Caricatore', prezzo: 45, minuti: 0 },
    { nome: 'Porta di ricarica', prezzo: 10, minuti: 15 },
    { nome: 'Cablaggi', prezzo: 10, minuti: 30 },
  ] },
];

// Manodopera: CHF per ogni blocco di 15 minuti (il tempo totale si arrotonda al quarto d'ora).
export const labor = { minuti: 15, prezzo: 5 };


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
