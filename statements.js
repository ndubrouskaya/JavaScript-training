/*
Given two strings(digits which maybe separated by letters), return sum of all
numbers in this strings, don't forget to check if string is a hexadecimal number.
For advanced part you may want to create sum of all digits in parsed numbers
include hexadecimal digits (A, B, C, D, E, F);
*/
console.log('\n------------Two string sum------------\n');
let str1 = '123x1z13',
    str2 = 'a123';
// 123113 + 0xA123 = 164364
function getSum(str1, str2) {
    let int1 = modifyStr(str1);
    let int2 = modifyStr(str2);
    let hexPattern = /^0x[a-f0-9]+$/i;
    console.log(int1 + ' + ' + int2 + ' ->');
    let sum = parseInt(int1, (hexPattern).test(int1) ? 16 : 10) + parseInt(int2, (hexPattern).test(int2) ? 16 : 10);
    console.log(sum);
}

function modifyStr(str) {
    if ((/^[0-9a-f]+$/i).test(str)) {
        str = '0x' + str;
    } else {
        str = str.replace(/[a-z]/gi, '');
    }
    return str;
}

getSum(str1, str2);

/*
SemiColonSON (CommaColonSON) Given the following data, separate by commas and semicolons,  parse it in JS object in following way
var data = ";key,value;key1,value;key3,value3;";
var output = {     key: 'value',     key1: 'value1',
    key3: 'value3'
};
*/

console.log('\n------------SemiColonSON------------\n');
let data = ";key,value;key1,value;key3,value3;";
function parseData(data) {
    let output = {};
    let dataArray = data.split(';').filter((value) => value != '');
    for (let i = 0; i < dataArray.length; i++) {
        let keyValueArr = dataArray[i].split(',');
        Object.defineProperty(output, keyValueArr[0], {
            value: keyValueArr[1],
            enumerable: true
        });
    }
    return output;
}

let output = parseData(data);
console.log(output);
