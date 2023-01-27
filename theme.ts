import { buildLegacyTheme } from 'sanity';

const props = {
  '--my-black': '#302D2D',
  '--my-border': '#999999',
  '--my-white': '#fff',
  '--my-green': '#60B656',
  '--element-backgtound': '#FDFDFD',
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  '--black': props['--my-black'],
  '--white': props['--my-white'],

  '--gray': props['--my-border'],
  '--gray-base': props['--my-border'],

  '--component-bg': props['--element-backgtound'],
  '--component-text-color': props['--my-black'],

  /* Brand */
  '--brand-primary': props['--my-green'],

  // Default button
  '--default-button-color': props['--my-black'],
  '--default-button-primary-color': props['--my-border'],
  '--default-button-success-color': props['--my-green'],

  /* State */
  '--state-info-color': props['--my-black'],
  '--state-success-color': props['--my-green'],

  /* Navbar */
  '--main-navigation-color': props['--my-white'],
  '--main-navigation-color--inverted': props['--my-black'],

  '--focus-color': props['--my-green'],
});
