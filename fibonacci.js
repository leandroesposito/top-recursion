function fibs(n) {
  arr = [0, 1];

  if (n <= 2) {
    return arr.slice(0, n);
  }

  let i = 2;
  while (i < n) {
    arr.push(arr[i - 1] + arr[i - 2]);
    i += 1;
  }

  return arr;
}

function fibsRec(n) {
  function recursiveHelper(n) {
    if (n < 2) {
      return n;
    }

    return recursiveHelper(n - 1) + recursiveHelper(n - 2);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(recursiveHelper(i));
  }

  return result;
}

function fibsRecMemo(n) {
  function recursiveHelper(n) {
    if (n < result.length) {
      return result[n];
    }

    if (n < 2) {
      return n;
    }

    return recursiveHelper(n - 1) + recursiveHelper(n - 2);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(recursiveHelper(i));
  }

  return result;
}

function testFunction(callback, times) {
  const start = new Date();
  const result = callback(times);
  const end = new Date();
  // console.log(result);
  console.log(
    "Elapsed milliseconds of",
    times,
    callback.name,
    end.getTime() - start.getTime()
  );
}

const repetitions = 1e8;

testFunction(fibs, repetitions);
testFunction(fibsRecMemo, repetitions);
testFunction(fibsRec, 40);
