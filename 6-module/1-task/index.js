/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.drawTable();
  }

  drawTable() {
    const thead = this.elem.appendChild(document.createElement('thead'));
    this.appendRow({
                      name: 'Имя',
                      age: 'Возраст',
                      salary: 'Зарплата',
                      city: 'Город',
                      close: ''
                    }, 'th', thead);

    const tbody = this.elem.appendChild(document.createElement('tbody'));
    for (const row of this.rows) {
      row.button = '<button>X</button>';
      this.appendRow(row, 'td', tbody);
    }

    const buttons = tbody.querySelectorAll('button');
    for (const button of buttons)
      button.addEventListener('click', (e) => {
        tbody.removeChild(e.target.closest('tr'));
      })
  }

  appendRow(row, cellType, parent) {
    const tRow = parent.insertRow();
    for (const key of Object.keys(row)) {
      const cell = document.createElement(cellType);
      cell.insertAdjacentHTML('beforeEnd', row[key]);
      tRow.appendChild(cell);
    }
  }
}
