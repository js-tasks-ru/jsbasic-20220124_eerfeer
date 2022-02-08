function highlight(table) {
  for (const tbody of table.tBodies) {
    for (const row of tbody.rows) {
      // Setting status
      const status = row.cells[3].dataset.available;
      row.setAttribute( status === undefined ? 'hidden' : 'visible', '' );
      row.classList.add( status === 'true' ? 'available' : 'unavailable' );

      // Setting gender
      row.classList.add( row.cells[2].innerText === 'f' ? 'female' : 'male');

      // Setting age
      row.style.textDecoration = row.cells[1].innerText <= 18 ? 
                                  'line-through' : '';
    }
  }  
}
