var STkit = (function() {
    return {memoizer: memoizer, isObjLikeArray: isObjLikeArray, debehaviorizer: debehaviorizer}
})();

module.exports = STkit;

function memoizer(func) {
    var cache = {};
    return function(x) {
        if (x in cache) {
            return cache[x];
        }
        return cache[x] = func(x);
    };
}

function isObjLikeArray(obj) {
    if (obj
        && !Array.isArray(obj)
        && typeof obj === 'object'
        && Object.keys(obj).length
        && obj.hasOwnProperty('length')
        && obj.length === Object.keys(obj).length - 1
        && isObjPropsLikeIndex(obj)) {
        return true;
    }
    return false;
}

function isObjPropsLikeIndex(obj) {
    var numericPropsArr = Object.keys(obj).filter(function(element, index, arr) {
        return !isNaN(arr[index]);
    });
    for (var i = 0; i < numericPropsArr.length; i++) {
        if (!(i in obj)) {
            return false;
        }
    }
    return true;
}

function debehaviorizer(obj, isBehaviorSeparate) {
    if (!obj) {
        console.error('Object null or undefined!');
        return;
    }
    var deletedMethods = [];
    for (var prop in obj) {
        if (typeof obj[prop] === 'object') {
            debehaviorizer(prop, isBehaviorSeparate);
        }
        if (typeof obj[prop] === 'function') {
            if (isBehaviorSeparate) {
                deletedMethods.push(obj[prop]);
            }
            var result;
            try {
                result = delete obj[prop];
            } catch (e) {
                console.error(e.toString());
            } finally {
                if (!result) {
                    console.error('Impossible to delete property ' + prop + '!!! Object maybe freezed or sealed');
                    return;
                }
            }
        }
    }
    return isBehaviorSeparate
        ? deletedMethods
        : obj;
}
