import { get } from '../fetch.js';
import '../mock.js';
import { filterIdLessThan100, buildList } from './utils.js';


/**
 * 清除列表
 * @return void
 */
window.handleClearList = function () {
    document.getElementById('content').innerHTML = '';
}

/**
 * 加载列表
 * @return void
 */
window.handleLoadList = function handleLoadList () {
    get('/api/list').then(function (list) {
        buildList(list);
    });
}

handleLoadList();