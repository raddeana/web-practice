import Mock from '../libs/mock-min.js';

const Random = Mock.Random;

Mock.mock('/list', (req, res) => {
    let list = [];

    for(let i = 0; i < 500; i ++) {
        list.push({
            id: Random.integer(1, 999999),
            title: Random.csentence(5, 10),
            company: Random.csentence(5, 10),
            attentionDegree: Random.integer(100, 9999),
            photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
        })
    }

    return list
})