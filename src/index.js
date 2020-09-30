
exports.min = function min (array) {
    return array && array.length ? array.sort((a, b) => a - b)[0] : 0;
}

exports.max = function max (array) {
    return array && array.length ? array.sort((a, b) => a - b)[array.length - 1] : 0;
}

exports.avg = function avg (array) {
    return array && array.length ? array.reduce((prevV, item, index, array) => prevV + item, 0) / array.length : 0;
}
