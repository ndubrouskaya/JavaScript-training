var array = [];

initArray(array, 10);

console.log('\nINSERTION_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + insertionSort(array).join(' '));

console.log('\nQUICK_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + quickSort(array).join(' '));

console.log('\nMERGE_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + mergeSort(array).join(' '));

console.log('\nBUBLE_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + bubleSort(array).join(' '));

console.log('\nSHELL_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + shellSort(array).join(' '));

console.log('\nCOUNTING_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + countingSort(array).join(' '));

let sqArray = [];
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
let obj1 = {
    a: 2,
    c: 3,
    d: 3
};
let obj2 = {
    a: 1
};
let obj3 = {
    a: 2,
    c: 3
};
let arOfObj = [obj1, obj2, obj3];
// Calling method
console.log('ASC -> ');
console.log(objSort(arOfObj, 'asc'));
console.log('DESC -> ');
console.log(objSort(arOfObj, 'desc'));

function initArray(arr, length) {
    for (let i = 0; i < length; i++) {
        arr[i] = Math.ceil(Math.random() * 100);
    }
}

function initArraySq(arr, length) {
    for (let i = 0; i < length; i++) {
        arr[i] = [];
        initArray(arr[i], length);
    }
}

function insertionSort(arr) {
    let arrCopy = arr.slice();
    for (var i = 0; i < arrCopy.length - 1; i++) {
        insert(arrCopy, i, arrCopy[i + 1]);
    }
    return arrCopy;
}

function insert(arr, index, value) {
    for (var j = index; j >= 0 && arr[j] > value; j--) {
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
}

function mergeSort(arr) {
    let arrCopy = arr.slice();
    if (arrCopy.length < 2)
        return arrCopy;

    let middle = parseInt(arrCopy.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];

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

    let left = [],
        right = [],
        pivot = arr[0];

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot
            ? left.push(arr[i])
            : right.push(arr[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

function bubleSort(arr) {
    let arrCopy = arr.slice();
    if (arrCopy.length === 1) {
        return arrCopy;
    }
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < arrCopy.length; i++) {
            if (arrCopy[i - 1] > arrCopy[i]) {
                let b = arrCopy[i];
                arrCopy[i] = arrCopy[i - 1];
                arrCopy[i - 1] = b;
                swapped = true;
            }
        }

    } while (swapped)return arrCopy;
}

function shellSort(arr) {
    let arrCopy = arr.slice();
    let increment = arrCopy.length / 2;
    while (increment > 0) {
        for (i = increment; i < arrCopy.length; i++) {
            let j = i;
            let temp = arrCopy[i];

            while (j >= increment && arrCopy[j - increment] > temp) {
                arrCopy[j] = arrCopy[j - increment];
                j = j - increment;
            }

            arrCopy[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arrCopy;
}

function countingSort(arr) {
    let min = getMin(arr);
    let max = getMax(arr);
    let arrCopy = arr.slice();
    let i,
        j = 0,
        count = [];
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
    for (i = 0; i < arrCopy.length; i++) {
        count[arrCopy[i]]++;
    }
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arrCopy[j++] = i;
        }
    }
    return arrCopy;
}

function getMin(sqArr) {
    let min = sqArr[0][0];
    for (let i = 0; i < sqArr.length; i++) {
        for (let j = 0; j < sqArr[i].length; j++) {
            if (sqArr[i][j] < min) {
                min = sqArr[i][j];
            }
        }
    }
    return min;
}

function getMax(sqArr) {
    let max = sqArr[0][0];
    for (let i = 0; i < sqArr.length; i++) {
        for (let j = 0; j < sqArr[i].length; j++) {
            if (sqArr[i][j] > max) {
                max = sqArr[i][j];
            }
        }
    }
    return max;
}

function getAvg(sqArr) {
    let sum = 0;
    let rowLength = sqArr[0].length;
    for (let i = 0; i < sqArr.length; i++) {
        let x = sqArr[i].reduce(function(a, b) {
            return a + b;
        }, 0);
        sum += x;
    }
    return sum / (sqArr.length * rowLength);
}

function objSort(arOfObj, direction) {
    return arOfObj.sort(function(o1, o2) {
      if(direction.toLowerCase() == 'asc') {
          return Object.keys(o1).length - Object.keys(o2).length;
      } else if(direction.toLowerCase() == 'desc'){
          return Object.keys(o2).length - Object.keys(o1).length;
      } else {
        console.log('I don\'t know how to sort!');
      }
    });
}
