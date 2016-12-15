var array = [];

initArray(array, 10);

function initArray(arr, length) {
    arr.length = length;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * 100);
    }
}

console.log('\nINSERTION_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + insertionSort(array).join(' '));

console.log('\nQUICK_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + array.slice().sort((a, b) => {
    return a - b;
}).join(' '));

console.log('\nMERGE_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + mergeSort(array).join(' '));

console.log('\nBUBLE_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + bubleSort(array).join(' '));

console.log('\nSHELL_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + shellSort(array).join(' '));

console.log('\nCOUNTING_SORT\n');
console.log('Before : ' + array.join(' ') + ' -> after: ' + countingSort(array).join(' '));

console.log('\nMin element of array : ' + array.join(' ') + ' -> ' + getMin(array));

console.log('\nMax element of array : ' + array.join(' ') + ' -> ' + getMax(array));

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

    }
    while (swapped)
    return arrCopy;
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
    let i, j = 0,
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

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function getMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
