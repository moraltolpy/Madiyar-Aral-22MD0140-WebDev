2667. Create Hello World Function
const createHelloWorld = function() {
    const hello ='Hello World';
    return function(val) {
        return hello
    }
};

2620. Counter
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

2704. To Be Or Not To Be
var expect = function(val) {
    const startVal = val;
    var toBe = function(val){
        
        if(startVal!==val )
            throw "Not Equal"
        else 
            return true;
    }
    var notToBe = function(val){
        if(startVal===val )
            throw "Equal"
        else 
            return true;
    }
    return {toBe,notToBe}
};

2665. Counter II
var createCounter = function(init) {
    let val = init
    let old = init
    const increment = function(){
        val++;
        return val
    }
    const decrement = function (){
         val--;
         return val
    }
    const reset = function(){
        val = old;
        return val;
    }
    return {increment,decrement,reset}
};

2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    for(let i =0;i<arr?.length;i++){
        arr[i] = fn(arr[i],i)
        }
        return arr
};

2634. Filter Elements from Array
var filter = function(arr, fn) {
    var newArr = []
    for(let i=0;i<arr.length;i++)
        fn(arr[i],i) && newArr?.push(arr[i])
    return newArr
};

2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
    if(nums.length > 0 ){
        for(let i=0;i<nums.length;i++){
            init=fn(init,nums[i]);
        }
    }
    return init
};

2629. Function Composition
var compose = function(functions) {
	return function(x) {
        let sum=x;
        for(let i=functions?.length-1;i>=0;i--){
            sum = functions[i](sum)
            }
        return sum
    }
};

2703. Return Length of Arguments Passed
var argumentsLength = function(...args) {
    newArgs = [...args]
    return newArgs?.length;
 
};

2666. Allow One Function Call
var once = function(fn) {
    let lastAttempt=false;
    
    return function(...args){
        if(lastAttempt)
            return undefined;
        lastAttempt=true;
        return fn(...args)
    }
};

2723. Add Two Promises
var addTwoPromises = async function(promise1, promise2) {
    return await promise1 + await promise2;
};

2621. Sleep
async function sleep(millis) {
    const oldDate=Date.now();
    while(true)
        if(Date.now()-oldDate==millis)
        continue;
    
    return oldDate

}

2715. Timeout Cancellation
var cancellable = function(fn, args, t) {
  let canceled = false;

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  (async () => {
    await delay(t);
    if (!canceled) {
      fn(...args);
    }
  })();

  return function cancelT() {
    canceled = true;
  };
};

2725. Interval Cancellation
var cancellable = function(fn, args, t) {
  var timerId;
  var time = 0;
  var result = [];

  function executeFn() {
    var returnedValue = fn.apply(null, args);
    result.push({ time: time, returned: returnedValue });
    time += t;
    timerId = setTimeout(executeFn, t);
  }

  function cancelFn() {
    clearTimeout(timerId);
  }

  executeFn();

  return cancelFn;
};

2727. Is Object Empty
var isEmpty = function(p) {
    for (const _ in p) return false;
    return true;
};

2677. Chunk Array
function chunk(arr, size) {
  const chunkedArrays = [];
  let currentChunk = [];

  for (const element of arr) {
    currentChunk.push(element);
    if (currentChunk.length === size) {
      chunkedArrays.push(currentChunk);
      currentChunk = [];
    }
  }

  if (currentChunk.length > 0) {
    chunkedArrays.push(currentChunk);
  }

  return chunkedArrays;
}

2619. Array Prototype Last
Array.prototype.last = function() {
    if(this.length===0)
        return -1;
    return this.pop();
};

2724. Sort By
const sortBy = function(arr, fn) {
    return arr.sort((a,b)=>fn(a)-fn(b));
};

2695. Array Wrapper
var ArrayWrapper = function(nums) {
    this.nums=[...nums];
};

ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((total,n) => total + n,0)
}

ArrayWrapper.prototype.toString = function() {
    let str = "[";
    this.nums.forEach((n) => { 
        str += n;
        str += ',';
    });
    if (this.nums.length)
        str = str.substring(0,str.length - 1);
    str += ']';
    return str;
}

2726. Calculator with Method Chaining
class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return this.result;
  }
}


