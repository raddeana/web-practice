document.getElementById('start-button').onclick = function () {
    new Worker('/js/web-worker/worker.js').postMessage('start');
};