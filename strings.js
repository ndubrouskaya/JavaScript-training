var myStr = 'Hallelujah';

var myStrCamel1 = 'CamelCase';
var myStrCamel2 = 'camelCamelCase';

var myStrPascal1 = 'Pascal_Case';
var myStrPascal2 = 'pascal_pascal_case';

var subStr1 = 'lo';
var subStr2 = 'Ha';

loggerInfo("\nREVERSE_CHECK");
loggerInfo('Reverse String "' + myStr + '" -> ' + reverseString(myStr));
loggerInfo("\nIS_ENDS_CHECK");
loggerInfo('"' + myStr + '" ends with "' + subStr1 + '" -> ' + isEndsWith(myStr, subStr1));
loggerInfo("\nIS_STARTS_CHECK");
loggerInfo('"' + myStr + '" starts with "' + subStr2 + '" -> ' + isStartsWith(myStr, subStr2));
loggerInfo("\nIS_CAMEL_CASE_CHECK");
loggerInfo('Check if "' + myStrCamel1 + '" is in camel case -> ' + isCamelCase(myStrCamel1));
loggerInfo('Check if "' + myStrCamel2 + '" is in camel case -> ' + isCamelCase(myStrCamel2));
loggerInfo('Check if "' + myStr + '" is in camel case -> ' + isCamelCase(myStr));
loggerInfo("\nIS_PASCAL_CASE_CHECK");
loggerInfo('Check if "' + myStrPascal1 + '" is in pascal case -> ' + isPascalCase(myStrPascal1));
loggerInfo('Check if "' + myStrPascal2 + '" is in pascal case -> ' + isPascalCase(myStrPascal2));
loggerInfo('Check if "' + myStr + '" is in pascal case -> ' + isPascalCase(myStr));

function loggerInfo(action) {
    console.log(action);
}

function reverseString(str) {
    return str.split('').reverse().join('')
};

function isEndsWith(str, subStr) {
    return str.endsWith(subStr);
};

function isStartsWith(str, subStr) {
    return str.startsWith(subStr);
};

function isCamelCase(str) {
    let regExp = new RegExp(/\b([A-Z]*[a-z]+([A-Z][a-z]+)+)\b/);
    return regExp.test(str);
}

function isPascalCase(str) {
    let regExp = new RegExp(/\b([A-Z]*[a-z]+(_[A-Z]*[a-z]+)+)\b/);
    return regExp.test(str);
}
