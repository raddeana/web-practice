import { get } from '../fetch.js';

if ('serviceWorker' in window.navigator) {
  navigator.serviceWorker.register('/js/worker.js')
    .then(function (reg) {
      get('/api/list')
    });
}