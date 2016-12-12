var myStr = 'Hello';
var subStr1 = 'lo';
var subStr2 = 'no';

console.log('1.\t"' + myStr +  '"' + ' after reverse - "' + reverseString(myStr) + '"');
console.log('2.\tString "' + myStr + '" ends with "' + subStr1 + '" - ' + isEndsWith(myStr, subStr1));
console.log('\tString "' + myStr + '" ends with "' + subStr2 + '" - ' + isEndsWith(myStr, subStr2));


function reverseString(str) {
  return str.split('').reverse().join('');
};

function isEndsWith(str, subStr) {
  return str.endsWith(subStr);
};
