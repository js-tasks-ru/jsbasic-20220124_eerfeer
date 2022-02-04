function getMinMax(str) {
  let numbers = str.split(' ');
  
  numbers = numbers.reduce((arr, item) => {
    let numberCast = Number(item);
    if (numberCast)                           // if the cast is not NaN, then push
        arr.push(numberCast);
    return arr;
  }, []);

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
