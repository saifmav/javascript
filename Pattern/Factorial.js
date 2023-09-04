const fact = (num) => {
  let facto = 1;
  if (num === 0) {
    console.log(`factorial of ${num} is 1`);
  } else if (num < 0) {
    console.log(`negative number`);
  } else {
    for (let i = 1; i <= num; i++) {
      facto = facto * i;
    }
  }
  return facto
}
 const result = fact(5)

// in recursion
