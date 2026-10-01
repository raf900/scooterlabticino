// Trova una foto in src/assets/ dal nome del file.
const assets = import.meta.glob('../assets/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

export const photo = (file) => file && assets[`../assets/${file}`];
