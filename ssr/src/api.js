export function fetchItem () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                title: Math.random(),
                desc: Math.random(),
                content: Math.random()
            });
        }, 1000);
    });
}