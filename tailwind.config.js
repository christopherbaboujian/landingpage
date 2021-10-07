const pages = require('./lib/content');

const colors = {};
Object.keys(pages).forEach((pKey) => {
  const clr = pages[pKey].colors;
  if (clr) {
    Object.keys(clr).forEach((cKey) => {
      // if color value is hex e.g. #fff then add it to colors
      // rule -> key_cKey: value
      const key = `${pKey}_${cKey}`;
      if (clr[cKey].startsWith('#')) {
        colors[key] = clr[cKey];
      }
    })
  }
});

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/custom-forms')
  ],
}
