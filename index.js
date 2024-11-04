import getJson from './js/getJson.js';
import renderTable from './js/renderTable.js';

const table = document.querySelector('tbody');

const data = await getJson('/data/table.json');

const markup = renderTable(data);

table.innerHTML = markup;
