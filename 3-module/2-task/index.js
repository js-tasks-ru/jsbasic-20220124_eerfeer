function filterRange(arr, a, b) {
  [a, b] = [Math.min(...[a, b]), Math.max(...[a, b])];
  return arr.filter(item => item >= a && item <= b );   
}
