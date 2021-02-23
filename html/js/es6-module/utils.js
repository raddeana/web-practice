export function filterIdLessThan100 (arr) {
    return arr.filter(function (item) {
        return item.id < 100;
    });
}

export function buildList (arr) {
    let domList = document.getElementById('list');
    let listItemsHtml = arr.map(function ({ id, title, company, attentionDegree, photo }) {
        return `<div class="list-item" key="${id}"><p>${title}</p><p>${company}</p><p>${attentionDegree}</p><img class="photo" src="${photo}" /></div>`
    });

    domList.innerHTML = listItemsHtml.join('');
}