// Dati dell'attività — TODO: sostituire i valori segnaposto con quelli reali.
export const wa = (text) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
export const chf = (n) => (n == null ? 'Prezzo su richiesta' : `CHF ${n.toLocaleString('de-CH')}.–`);

export const site = {
  name: 'ScooterLab Ticino',
  tagline: 'Riparazione e modifiche di monopattini elettrici in Ticino',
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
