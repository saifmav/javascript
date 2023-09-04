function nextBiggest(arr) {
    let max = -Infinity, result = -Infinity;
    for (const value of arr) {
      const nr = Number(value)
      if (nr > max) {
        [result, max] = [max, nr] // save previous max
      } else if (nr < max && nr > result) { //false
        result = nr; // new second biggest
      }
    }
  
    return result;
  }
  
  const arr = ['20','100','111','105'];
  console.log(nextBiggest(arr));