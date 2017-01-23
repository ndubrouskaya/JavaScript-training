var array = [];
initArray(array, 10);

console.log('\nINSERTION_SORT\n');
var arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + insertionSort(arrCopy).join(' '));

console.log('\nQUICK_SORT\n');
arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + quickSort(arrCopy).join(' '));

console.log('\nMERGE_SORT\n');
arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + mergeSort(arrCopy).join(' '));

console.log('\nBUBLE_SORT\n');
arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + bubleSort(arrCopy).join(' '));

console.log('\nSHELL_SORT\n');
arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + shellSort(arrCopy).join(' '));

console.log('\nCOUNTING_SORT\n');
arrCopy = array.slice();
console.log('Before : ' + array.join(' ') + ' -> after: ' + countingSort(arrCopy).join(' '));

var sqArray = [];
initArraySq(sqArray, 5);

console.log('\n--------------------------------------------\n');
console.log('Square array\n');
console.log(sqArray);
console.log('\nMin element of square array -> ' + getMin(sqArray));
console.log('\nMax element of array -> ' + getMax(sqArray));
console.log('\nAverage value of all elements in square array -> ' + getAvg(sqArray));

console.log('\nCreate triangles - not implemented :-(')

console.log('\nSort array of objects by properties count, ascending and descending');
// Input data
var obj1 = {
    a: 2,
    c: 3,
    d: 3
};
var obj2 = {
    a: 1
};
var obj3 = {
    a: 2,
    c: 3
};
var arOfObj = [obj1, obj2, obj3];
// Calling method
console.log('ASC -> ');
console.log(objSort(arOfObj, 'asc'));
console.log('DESC -> ');
console.log(objSort(arOfObj, 'desc'));

function initArray(arr, length) {
    for (var i = 0; i < length; i++) {
        arr[i] = Math.ceil(Math.random() * 100);
    }
}

function initArraySq(arr, length) {
    for (var i = 0; i < length; i++) {
        arr[i] = [];
        initArray(arr[i], length);
    }
}

function insertionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        insert(arr, i, arr[i + 1]);
    }
    return arr;
}

function insert(arr, index, value) {
    for (var j = index; j >= 0 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
}

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var arr = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    while (left.length)
        arr.push(left.shift());

    while (right.length)
        arr.push(right.shift());

    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1)
        return arr;

    var left = [],
        right = [],
        pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        arr[i] < pivot
            ? left.push(arr[i])
            : right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function bubleSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    var swapped;
    do {
        swapped = false;
        for (var i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                var b = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = b;
                swapped = true;
            }
        }

    } while (swapped);
    return arr;
}

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}

function countingSort(arr) {
    var n = arr.length;
    var count = [];
    var res = [];
    for (var i = 0; i < n; i++) {
        count[i] = 0;
    }
    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                count[j]++;
            } else {
                count[i]++;
            }
        }
    }
    for (var i = 0; i < n; i++) {
        res[count[i]] = arr[i];
    }
    return res;
}

function getMin(sqArr) {
    var min = sqArr[0][0];
    for (var i = 0; i < sqArr.length; i++) {
        for (var j = 0; j < sqArr[i].length; j++) {
            if (sqArr[i][j] < min) {
                min = sqArr[i][j];
            }
        }
    }
    return min;
}

function getMax(sqArr) {
    var max = sqArr[0][0];
    for (var i = 0; i < sqArr.length; i++) {
        for (var j = 0; j < sqArr[i].length; j++) {
            if (sqArr[i][j] > max) {
                max = sqArr[i][j];
            }
        }
    }
    return max;
}

function getAvg(sqArr) {
    var sum = 0;
    var rowLength = sqArr[0].length;
    for (var i = 0; i < sqArr.length; i++) {
        var x = sqArr[i].reduce(function(a, b) {
            return a + b;
        }, 0);
        sum += x;
    }
    return sum / (sqArr.length * rowLength);
}

function objSort(arOfObj, direction) {
    return arOfObj.sort(function(o1, o2) {
        if (direction.toLowerCase() == 'asc') {
            return Object.keys(o1).length - Object.keys(o2).length;
        } else if (direction.toLowerCase() == 'desc') {
            return Object.keys(o2).length - Object.keys(o1).length;
        } else {
            console.warn('I don\'t know how to sort!');
        }
    });
}
