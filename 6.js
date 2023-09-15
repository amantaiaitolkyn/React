/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let narr = [];
    for(let i=0; i<arr.length; i++)
        if (fn(arr[i], i))
            narr.push(arr[i]);
    return narr;
};