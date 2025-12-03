import { MODALITY_ORDER, MODALITY_LABELS } from '../data/constants.js';
import { getModalityColors } from '../data/modalityColors.js';
import { showProviderModal } from './providerModal.js';

// Sorting state per modality
const sortState = {};

/**
 * Render all modality sections with provider tables
 */
export function renderModalitySections(model, modalitiesGridEl, onToggle) {
  const fragment = document.createDocumentFragment();
  
  MODALITY_ORDER.forEach(modality => {
    const section = createModalitySection(model, modality, onToggle);
    fragment.appendChild(section);
  });
  
  modalitiesGridEl.innerHTML = '';
  modalitiesGridEl.appendChild(fragment);
}

function createModalitySection(model, modality, onToggle) {
  const rows = model.getRows(modality);
  const units = model.usage[modality];

  const section = document.createElement('section');
  section.className = 'modality-section';

  const header = createModalityHeader(modality, units);
  const table = createModalityTable(rows, units, modality, onToggle, model.providers);

  section.appendChild(header);
  section.appendChild(table);

  return section;
}

function createModalityHeader(modality, units) {
  const colors = getModalityColors(modality);
  
  const header = document.createElement('div');
  header.className = 'modality-header';

  const title = document.createElement('div');
  title.className = 'modality-title';

  const pill = document.createElement('span');
  pill.className = 'modality-pill';
  pill.textContent = modality.toUpperCase();
  pill.style.background = colors.gradient;
  pill.style.borderColor = colors.primary;

  title.appendChild(pill);

  header.appendChild(title);

  return header;
}

function createModalityTable(rows, units, modality, onToggle, allProviders) {
  const wrapper = document.createElement('div');
  wrapper.className = 'modality-table-wrapper';

  // Initialize sort state for this modality if not exists
  if (!sortState[modality]) {
    sortState[modality] = { column: null, direction: 'asc' };
  }

  const table = document.createElement('table');
  
  const onSort = (column) => {
    const state = sortState[modality];
    if (state.column === column) {
      state.direction = state.direction === 'asc' ? 'desc' : 'asc';
    } else {
      state.column = column;
      state.direction = 'asc';
    }
    
    // Re-render the table
    const newTable = document.createElement('table');
    newTable.appendChild(createTableHeader(modality, onSort));
    newTable.appendChild(createTableBody(rows, units, modality, onToggle, allProviders));
    wrapper.innerHTML = '';
    wrapper.appendChild(newTable);
  };
  
  table.appendChild(createTableHeader(modality, onSort));
  table.appendChild(createTableBody(rows, units, modality, onToggle, allProviders));

  wrapper.appendChild(table);
  return wrapper;
}

function createTableHeader(modality, onSort) {
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  
  const columns = [
    { text: 'Select', sortable: true, column: 'selected' },
    { text: 'Provider', sortable: true, column: 'provider' },
    { text: 'Price / unit', sortable: true, column: 'price' },
    { text: 'Units', sortable: false, column: null },
    { text: 'Cost', sortable: false, column: null },
    { text: 'API', sortable: false, column: null }
  ];
  
  const state = sortState[modality] || { column: null, direction: 'asc' };
  
  columns.forEach(col => {
    const th = document.createElement('th');
    th.textContent = col.text;
    
    if (col.sortable) {
      th.classList.add('sortable');
      th.style.cursor = 'pointer';
      th.style.userSelect = 'none';
      
      // Add sort indicator
      if (state.column === col.column) {
        const arrow = state.direction === 'asc' ? ' ▲' : ' ▼';
        th.textContent += arrow;
        th.classList.add('sorted');
      }
      
      th.addEventListener('click', () => onSort(col.column));
    }
    
    tr.appendChild(th);
  });
  
  thead.appendChild(tr);
  return thead;
}

function createTableBody(rows, units, modality, onToggle, allProviders) {
  const tbody = document.createElement('tbody');

  if (rows.length === 0) {
    tbody.appendChild(createEmptyRow(units));
  } else {
    const providerMap = createProviderMap(allProviders);
    const fragment = document.createDocumentFragment();
    
    const onShowDetails = (providerId) => {
      const modalityProviders = rows
        .map(r => providerMap.get(r.providerId))
        .filter(Boolean);
      showProviderModal(modalityProviders, providerId);
    };
    
    // Sort rows based on current sort state
    const sortedRows = sortRows(rows, modality);
    
    sortedRows.forEach(row => {
      fragment.appendChild(createProviderRow(row, onToggle, onShowDetails));
    });
    tbody.appendChild(fragment);
  }

  return tbody;
}

function sortRows(rows, modality) {
  const state = sortState[modality];
  if (!state || !state.column) {
    return rows;
  }
  
  const sorted = [...rows];
  const direction = state.direction === 'asc' ? 1 : -1;
  
  sorted.sort((a, b) => {
    let aVal, bVal;
    
    switch (state.column) {
      case 'selected':
        aVal = a.selected ? 1 : 0;
        bVal = b.selected ? 1 : 0;
        return (bVal - aVal) * direction; // Checked items first when ascending
        
      case 'provider':
        aVal = a.providerName.toLowerCase();
        bVal = b.providerName.toLowerCase();
        return aVal.localeCompare(bVal) * direction;
        
      case 'price':
        aVal = a.pricePerUnit;
        bVal = b.pricePerUnit;
        return (aVal - bVal) * direction;
        
      default:
        return 0;
    }
  });
  
  return sorted;
}

function createProviderMap(providers) {
  return new Map(providers.map(p => [p.id, p]));
}

function createEmptyRow(units) {
  const emptyRow = document.createElement('tr');
  const emptyCell = document.createElement('td');
  emptyCell.colSpan = 6;
  emptyCell.style.color = 'var(--text-soft)';
  emptyCell.style.fontSize = '0.78rem';
  emptyCell.textContent = units > 0
    ? 'No providers configured for this modality in the current config.'
    : 'No usage for this modality yet.';
  emptyRow.appendChild(emptyCell);
  return emptyRow;
}

function createProviderRow(row, onToggle, onShowDetails) {
  const tr = document.createElement('tr');
  if (row.selected) tr.classList.add('row-selected');

  tr.appendChild(createCheckboxCell(row, onToggle));
  tr.appendChild(createProviderNameCell(row, onShowDetails));
  tr.appendChild(createTextCell(`$${row.pricePerUnit.toFixed(6)}`, 'price-cell', 'Price / unit'));
  tr.appendChild(createTextCell(row.units.toString(), '', 'Units'));
  tr.appendChild(createTextCell(`$${row.cost.toFixed(2)}`, 'cost-cell', 'Cost'));
  tr.appendChild(createApiLinkCell(row.apiUrl));

  return tr;
}

function createProviderNameCell(row, onShowDetails) {
  const td = document.createElement('td');
  td.className = 'provider-name-cell';
  td.setAttribute('data-label', 'Provider');
  
  const nameSpan = document.createElement('span');
  nameSpan.textContent = row.providerName;
  
  const infoIcon = document.createElement('button');
  infoIcon.className = 'provider-info-icon';
  infoIcon.innerHTML = 'ⓘ';
  infoIcon.title = 'View provider details';
  infoIcon.setAttribute('aria-label', `View details for ${row.providerName}`);
  infoIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    onShowDetails(row.providerId);
  });
  
  td.appendChild(nameSpan);
  td.appendChild(infoIcon);
  
  return td;
}

function createCheckboxCell(row, onToggle) {
  const td = document.createElement('td');
  td.setAttribute('data-label', 'Select');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'select-checkbox';
  checkbox.checked = row.selected;
  checkbox.addEventListener('change', () => onToggle(row.modality, row.providerId));
  td.appendChild(checkbox);
  return td;
}

function createTextCell(text, className = '', dataLabel = '') {
  const td = document.createElement('td');
  if (className) td.className = className;
  if (dataLabel) td.setAttribute('data-label', dataLabel);
  td.textContent = text;
  return td;
}

function createApiLinkCell(url) {
  const td = document.createElement('td');
  td.setAttribute('data-label', 'API');
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'api-link';
  link.textContent = 'API docs';
  td.appendChild(link);
  return td;
}

