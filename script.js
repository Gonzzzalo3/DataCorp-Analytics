// Obtener CSV embebido
const csv = document.getElementById("csv-data").textContent.trim();

// Convertir a matriz
const rows = csv.split('\n').map(row => row.split(','));

const head = document.getElementById('table-head');
const body = document.getElementById('table-body');

// Crear cabecera
rows[0].forEach(col => {
  const th = document.createElement('th');
  th.textContent = col;
  head.appendChild(th);
});

// Crear filas
rows.slice(1).forEach(row => {
  const tr = document.createElement('tr');

  row.forEach(col => {
    const td = document.createElement('td');
    td.textContent = col;
    tr.appendChild(td);
  });

  body.appendChild(tr);
});