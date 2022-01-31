function sumSalary(salaries) {
  let sum = 0;
  for (const key in salaries)
    sum += [NaN, Infinity, -Infinity].includes(+salaries[key]) ? 0 : salaries[key];
  return sum;
}
