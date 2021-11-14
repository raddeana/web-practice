
this.addEventListener('message', function () {
    setInterval(function () {
        console.log('working context');
    }, 1000);
}, false);