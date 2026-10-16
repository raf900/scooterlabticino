// Contenuti della pagina Sensibilizzazione.
// Regole verificate su fonti ufficiali svizzere (USTRA/ASTRA, Suva) a ottobre 2026.

// Le regole in Svizzera per i monopattini elettrici (max 20 km/h)
export const rules = [
  { icon: 'age', title: 'Dai 14 anni', text: 'Sotto i 14 anni è vietato guidare su strada. Dai 14 ai 16 anni serve la licenza di categoria M; dai 16 anni non serve.' },
  { icon: 'speed', title: 'Massimo 20 km/h', text: 'I monopattini omologati per la strada vanno al massimo a 20 km/h. Un monopattino “sbloccato” per andare più veloce non è più in regola per circolare.' },
  { icon: 'road', title: 'Mai sul marciapiede', text: 'Valgono le regole delle biciclette: pista ciclabile dove c’è, altrimenti strada, tenendo la destra. Il marciapiede è vietato.' },
  { icon: 'one', title: 'Una persona sola', text: 'Il monopattino è per una persona. In due si perde l’equilibrio e si frena molto peggio.' },
  { icon: 'light', title: 'Luci accese', text: 'Luce bianca davanti e rossa dietro, obbligatorie con il buio e la scarsa visibilità. Consiglio: tienile accese anche di giorno.' },
  { icon: 'helmet', title: 'Casco consigliato', text: 'Non è obbligatorio, ma in caso di caduta la testa è la parte più a rischio. Mettilo sempre, soprattutto i ragazzi.' },
  { icon: 'alcohol', title: 'Alcol: come in auto', text: 'Dallo 0,5 per mille si è in stato di ebbrezza, con le stesse conseguenze dell’auto. Se bevi, vai a piedi.' },
  { icon: 'check', title: 'Omologato e assicurato', text: 'Molti modelli venduti online non sono omologati in Svizzera. Verifica il tuo monopattino e di avere un’assicurazione di responsabilità civile privata.' },
];

// Situazioni di tutti i giorni: cosa fare e cosa evitare.
// video: lasciare vuoto finché non c'è; poi incollare il link YouTube (es. 'https://youtu.be/XXXX') o il nome di un file in /public/video/.
export const situations = [
  {
    title: 'Pedoni e strisce pedonali',
    do: ['Sulle strisce la precedenza ce l’hanno i pedoni: scendi e attraversa a piedi spingendo il monopattino.', 'Rallenta molto vicino a fermate del bus, scuole e uscite dei negozi.', 'Se devi passare vicino a un pedone, rallenta e lascia tanto spazio.'],
    dont: ['Attraversare le strisce in sella pensando di avere la precedenza: non ce l’hai.', 'Suonare per far spostare le persone.', 'Passare a pochi centimetri da chi cammina.'],
    video: '',
  },
  {
    title: 'Incroci e svolte',
    do: ['Guarda bene a destra e a sinistra, anche quando hai la precedenza.', 'Segnala con il braccio prima di svoltare, solo se riesci a tenere il monopattino stabile.', 'Fai il contatto visivo con chi guida: se non ti ha visto, fermati.'],
    dont: ['Infilarti all’ultimo tra le auto ferme.', 'Svoltare a sinistra di colpo in mezzo al traffico: se è complicato, scendi e attraversa a piedi.'],
    video: '',
  },
  {
    title: 'Rotonde',
    do: ['Entra solo quando c’è un buco sicuro nel traffico.', 'Stai al centro della corsia, così le auto non ti sorpassano dentro la rotonda.', 'Segnala l’uscita.'],
    dont: ['Restare attaccato al bordo, dove le auto ti stringono.', 'Tagliare la rotonda.'],
    video: '',
  },
  {
    title: 'Pioggia, buio e strada rovinata',
    do: ['Con il bagnato frena prima e piano: lo spazio di frenata raddoppia.', 'Luci accese e vestiti chiari o catarifrangenti.', 'Guarda lontano per vedere buche, tombini e foglie bagnate.'],
    dont: ['Frenare di colpo in curva o sulle strisce bianche bagnate.', 'Passare nelle pozzanghere: sotto può esserci una buca.'],
    video: '',
  },
  {
    title: 'Telefono, cuffie e distrazioni',
    do: ['Imposta il navigatore prima di partire.', 'Tieni sempre due mani sul manubrio.', 'Volume basso o niente cuffie: devi sentire le auto e i clacson.'],
    dont: ['Scrivere o guardare il telefono mentre guidi.', 'Fare video o foto in movimento.'],
    video: '',
  },
  {
    title: 'Parcheggiare',
    do: ['Lascialo dove non dà fastidio: rastrelliere o posteggi per bici.', 'Mettilo dritto sul cavalletto e chiudilo con un lucchetto.'],
    dont: ['Lasciarlo in mezzo al marciapiede o davanti a porte e rampe.', 'Bloccare il passaggio a carrozzine, passeggini e persone con il bastone bianco.'],
    video: '',
  },
];

// Per i genitori
export const parents = [
  'Sotto i 14 anni il monopattino elettrico non può andare su strada: nemmeno “solo per un giro”.',
  'Dai 14 ai 16 anni serve la licenza M: fatela insieme, è anche un buon momento per ripassare le regole.',
  'Controllate che il monopattino non sia stato “sbloccato” per andare più veloce. Se avete dubbi, portatelo da noi.',
  'Casco sempre, anche se non è obbligatorio, e luci accese.',
  'Parlatene con calma: un incidente con un pedone può avere conseguenze gravi, anche per chi guida.',
];

// Controlli prima di partire
export const checks = [
  ['Freni', 'Tira le leve: il monopattino deve fermarsi deciso, senza rumori strani.'],
  ['Gomme', 'Gonfie alla pressione giusta e senza tagli. Una gomma sgonfia allunga la frenata.'],
  ['Luci', 'Davanti e dietro funzionano? Puliscile ogni tanto.'],
  ['Sterzo e chiusura', 'Nessun gioco nel piantone e nel sistema di chiusura.'],
  ['Batteria', 'Carica sufficiente: un monopattino che si spegne in mezzo alla strada è pericoloso.'],
];

// Quiz: answer = indice della risposta giusta
export const quiz = [
  { q: 'Da che età si può guidare un monopattino elettrico su strada?', options: ['12 anni', '14 anni', '18 anni'], answer: 1, why: 'Dai 14 anni, con la licenza M fino ai 16.' },
  { q: 'Dove puoi circolare se non c’è la pista ciclabile?', options: ['Sul marciapiede, piano', 'Sulla strada, tenendo la destra', 'Dove voglio'], answer: 1, why: 'Il marciapiede è vietato: si va in strada come le biciclette.' },
  { q: 'Qual è la velocità massima di un monopattino omologato?', options: ['20 km/h', '30 km/h', '45 km/h'], answer: 0, why: 'Al massimo 20 km/h. Oltre, non è più in regola per la strada.' },
  { q: 'Arrivi alle strisce pedonali. Cosa fai?', options: ['Passo veloce prima che arrivi un’auto', 'Scendo e attraverso a piedi', 'Suono e passo'], answer: 1, why: 'Solo i pedoni hanno la precedenza sulle strisce: scendi e attraversa a piedi.' },
  { q: 'Puoi portare un amico sul monopattino?', options: ['Sì, se è leggero', 'Solo per pochi metri', 'No, mai'], answer: 2, why: 'Il monopattino è per una sola persona.' },
];
