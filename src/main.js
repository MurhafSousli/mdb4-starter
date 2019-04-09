import '@babel/polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbootstrap/scss/mdb.lite.scss';

/**
 * Load all font awesome icons (large bundle size)
 * To fix this issue, you need to import each icon fro mthe library
 * Uncomment the following line, then uncomment the line after to import each icon 
 */
import '@fortawesome/fontawesome-free/js/all';
// import './icons';

/**
 * To use Notification / Toast, uncomment the following lines
 */ 
// import 'toastr/toastr.scss';
// import Toastr from 'toastr/toastr';
// window.toastr = Toastr;

/**
 * To use Wow.js, uncomment the following lines:
 */
// import WOW from 'wow.js/dist/wow';
// new WOW().init();

// Prepare each library for import
const importJQuery = import('jquery/dist/jquery').then(($) => {
  window.$ = $;
  window.jQuery = $;
});
const importWaves = import('node-waves/dist/waves').then((waves) => window.Waves = waves);
const importBootstrap = import('bootstrap/dist/js/bootstrap');
const importMDB = import('mdbootstrap/js/mdb');

async function loadDependancies() {

  // Wait until the following scripts are loaded
  await Promise.all([
    importJQuery,
    importWaves
  ]);

  // Load Bootstrap and MDB scripts
  await Promise.all([
    importBootstrap,
    importMDB
  ]);

  // Load app.js  
  await import('./app');
}

/**
 * Initial function: runs before dependancies are loaded
 */
(async () => {
  await loadDependancies();
})();
