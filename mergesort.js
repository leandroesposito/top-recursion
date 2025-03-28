function mergesort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  const halfPoint = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, halfPoint);
  const rightHalf = arr.slice(halfPoint);

  const sortedLeft = mergesort(leftHalf);
  const sortedRight = mergesort(rightHalf);

  let i = 0;
  let j = 0;
  const merged = [];

  // finish if any half is out of elements
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      merged.push(sortedLeft[i]);
      i++;
    } else {
      merged.push(sortedRight[j]);
      j++;
    }
  }

  // add remaining elements
  for (let n = i; n < sortedLeft.length; n++) {
    merged.push(sortedLeft[n]);
  }
  for (let n = j; n < sortedRight.length; n++) {
    merged.push(sortedRight[n]);
  }

  return merged;
}

function generateArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
    // arr.push(Math.floor(Math.random() * 1e6));
  }
  return arr;
}

function testSort(n) {
  const arr = generateArray(n);
  console.log(arr);
  const start = new Date();
  sorted = mergesort(arr);
  const end = new Date();
  console.log(sorted);
  console.log(
    "Elapsed",
    end.getTime() - start.getTime(),
    "sorting",
    n,
    "elements"
  );
}

for (let i = 1; i < 10; i++) {
  // testSort(10 ** i);
  testSort(i);
}
