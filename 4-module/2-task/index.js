function makeDiagonalRed(table) {
  let i = 0;
  for (const tbody of table.tBodies) {
    for (const row of tbody.rows) {
      // It won't work great if the num of cells in rows is different
      row.cells[i % row.cells.length].style.backgroundColor = 'red';
      i++;
    }
  }  
}
