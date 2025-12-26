let data = [10, 20, undefined, -1, true].filter(elmt => {
  return typeof elmt === 'number' && elmt > 0;
});

console.log(data); // [10, 20]



let datas = [10, 20, undefined, -1, true].filter(el => el > 0 && typeof el === 'number');
console.log(datas); // [10, 20]
