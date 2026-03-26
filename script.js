fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.split('\n').map(row => row.split(','));

    const head = document.getElementById('table-head');
    const body = document.getElementById('table-body');

    // Cabecera
    rows[0].forEach(col => {
      const th = document.createElement('th');
      th.textContent = col;
      head.appendChild(th);
    });

    // Filas
    rows.slice(1).forEach(row => {
      const tr = document.createElement('tr');

      row.forEach(col => {
        const td = document.createElement('td');
        td.textContent = col;
        tr.appendChild(td);
      });

      body.appendChild(tr);
    });
  })
  .catch(error => console.error('Error cargando CSV:', error));