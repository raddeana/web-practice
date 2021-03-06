/**
 * 将参数添加到url中
 * @param {string}
 * @param {object}
 * @return {string}
 */
function toQueryString (url, params) {
    if (params) {
        let paramsArray = Object.keys(params).map(key => `${key}=${params[key]}`);

        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }

    return url;
}

/**
 * get 请求
 * @param {string}
 * @param {object}
 * @return {promise}
 */
export function get (url, params) {
    return fetch(url, {
        method: 'GET',
        params
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(response); 
        }
    }, function (error) {
        return Promise.reject(error);
    });
}

/**
 * post 请求
 * @param {string}
 * @param {object}
 * @return {promise}
 */
export function post (url, data) {
  return fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'content-type': 'application/json'
    },
    method: 'POST'
  })
  .then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response); 
    }
  }, function (error) {
    return Promise.reject(error);
  });
}