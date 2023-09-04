const palidrom = (str) => {
  let Len = str.length;//5
  for (let i = 0; i < Len / 2; i++) {
    if (str[i] !== str[strLen-1-i]) {
        return 'IT IS NOT PALIMDROM'
    }
  }
  return 'IT IS PALIMDROM'
}
console.log(palidrom('mdddm'))
