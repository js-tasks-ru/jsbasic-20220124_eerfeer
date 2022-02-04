function camelize(str) {
  return str.split('-').reduce((resultStr, part, i) => {
    if (i !== 0) 
      resultStr += part[0].toUpperCase() + part.slice(1);
    else resultStr += part;    
    return resultStr;
  }, '');
}
