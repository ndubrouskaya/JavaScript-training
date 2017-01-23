var STkit = require('./STkit');

console.log('-------------------');
console.log('1 - Check memoizer');
console.log('-------------------');
var n = 10;
function fibo(n) {
  return n < 2
  ? n
  : fibo(n - 1) + fibo(n - 2);
}
//memoize fibo
fibo = STkit.memoizer(fibo);
console.log('\nFirst execution ob fibo function');
console.time('fibo 1');
var res = fibo(n);
console.timeEnd('fibo 1');

console.log('\nSecond execution ob fibo function');
console.time('fibo 2');
res = fibo(n);
console.timeEnd('fibo 2');

console.log('\nThird execution ob fibo function');
console.time('fibo 3');
res = fibo(n);
console.timeEnd('fibo 3');

//-----------------------------------------------------------------------------------------
console.log('\n-------------------------------');
console.log('2 - Check is object like array');
console.log('-------------------------------');

var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
}
var objLikeArr = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
}

var objLikeArr2 = {
  0: 'a',
  1: 'b',
  2: 'c',
  5: 'c',
  length: 5
}
console.log('Check if object %s is array like -> %s', JSON.stringify(obj), STkit.isObjLikeArray(obj));
console.log('Check if object %s is array like -> %s', JSON.stringify(objLikeArr), STkit.isObjLikeArray(objLikeArr));

console.log('\n---------------------');
console.log('Check debehaviorizer');
console.log('---------------------');

//-----------------------------------------------------------------------------------------
obj = null;
console.log('\n1. Debehaviorize object if it is null');
console.log(JSON.stringify(STkit.debehaviorizer(obj)));
obj = {
    prop1: "1",
    prop2: "2",
    method1: function() {
        return true;
    },
    method2: function() {
        return false;
    },
    prop3: {
      prop1: "1",
      method3: function() {
          return true;
      }
    }
}
console.log('\n2. Debehaviorize object');
console.log(JSON.stringify(STkit.debehaviorizer(obj)));
obj = {
    prop1: "1",
    prop2: "2",
    method1: function() {
        return true;
    },
    method2: function() {
        return false;
    },
    prop3: {
      prop1: "1",
      method3: function() {
          return true;
      }
    }
}

console.log('\n3. Debehaviorize object and return array with behavior');
console.log(STkit.debehaviorizer(obj, true));
console.log(JSON.stringify(obj));

obj = {
    prop1: "1",
    prop2: "2",
    method1: function() {
        return true;
    },
    method2: function() {
        return false;
    },
    prop3: {
      prop1: "1",
      method3: function() {
          return true;
      }
    }
}
Object.freeze(obj);
console.log('\n4. Debehaviorize object if it is freezed');
console.log(JSON.stringify(STkit.debehaviorizer(obj)));
