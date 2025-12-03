import { MODALITY_ORDER } from '../data/constants.js';
import { showProviderModal } from './providerModal.js';
import { getModalityColors } from '../data/modalityColors.js';

/**
 * Render the summary card showing grand total and modality breakdowns
 */
export function renderSummary(model, grandTotalEl, summaryBadgesEl, selectedProvidersEl, numberAssetsEl) {
  const { usage } = model;
  const selectedCosts = model.getSelectedCostsByModality();
  const grandTotal = model.getGrandTotal();

  grandTotalEl.textContent = `$${grandTotal.toFixed(2)}`;

  // Calculate total assets (units × selected providers per modality)
  const totalAssets = calculateTotalAssets(model);
  if (numberAssetsEl) {
    numberAssetsEl.textContent = `(${totalAssets})`;
  }

  const fragment = document.createDocumentFragment();
  MODALITY_ORDER.forEach(modality => {
    const badge = createSummaryBadge({
      modality,
      label: modality.charAt(0).toUpperCase() + modality.slice(1),
      units: usage[modality],
      cost: selectedCosts[modality]
    });
    fragment.appendChild(badge);
  });
  
  summaryBadgesEl.innerHTML = '';
  summaryBadgesEl.appendChild(fragment);

  renderSelectedProviderChips(model, selectedProvidersEl);
}

function calculateTotalAssets(model) {
  return MODALITY_ORDER.reduce((total, modality) => {
    const units = model.usage[modality] || 0;
    const selectedProvidersCount = model.selections[modality].size;
    return total + (units * selectedProvidersCount);
  }, 0);
}

function createSummaryBadge({ modality, label, units, cost }) {
  const badge = document.createElement('div');
  badge.className = 'summary-badge';
  
  // Apply modality-specific color
  const colors = getModalityColors(modality);
  badge.style.background = colors.gradient;
  badge.style.borderColor = colors.primary;

  const labelSpan = document.createElement('span');
  labelSpan.className = 'summary-badge-label';
  labelSpan.textContent = label;

  const unitsSpan = document.createElement('span');
  unitsSpan.className = 'summary-badge-value';
  unitsSpan.textContent = `${units || 0} units`;

  const costSpan = document.createElement('span');
  costSpan.className = 'summary-badge-value';
  costSpan.textContent = `· $${(cost || 0).toFixed(2)}`;

  badge.appendChild(labelSpan);
  badge.appendChild(unitsSpan);
  badge.appendChild(costSpan);

  return badge;
}

function renderSelectedProviderChips(model, containerEl) {
  const selectedProviders = getSelectedProviders(model);
  
  if (selectedProviders.length === 0) {
    containerEl.innerHTML = '';
    return;
  }

  const fragment = document.createDocumentFragment();
  selectedProviders.forEach(({ provider, modalities }) => {
    const chip = createProviderChip(provider, modalities, model.providers);
    fragment.appendChild(chip);
  });

  containerEl.innerHTML = '';
  containerEl.appendChild(fragment);
}

function getSelectedProviders(model) {
  const providerMap = new Map();

  MODALITY_ORDER.forEach(modality => {
    const selectedIds = model.selections[modality];
    selectedIds.forEach(providerId => {
      if (!providerMap.has(providerId)) {
        const provider = model.providers.find(p => p.id === providerId);
        if (provider) {
          providerMap.set(providerId, { provider, modalities: [] });
        }
      }
      providerMap.get(providerId).modalities.push(modality);
    });
  });

  return Array.from(providerMap.values());
}

function createProviderChip(provider, modalities, allProviders) {
  const chip = document.createElement('div');
  chip.className = 'provider-chip';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'provider-chip-name';
  nameSpan.textContent = provider.name;

  const modalitiesSpan = document.createElement('span');
  modalitiesSpan.className = 'provider-chip-modalities';
  modalitiesSpan.textContent = modalities.map(m => 
    m.charAt(0).toUpperCase() + m.slice(1)
  ).join(', ');

  const infoBtn = document.createElement('button');
  infoBtn.className = 'provider-chip-info-btn';
  infoBtn.innerHTML = 'ⓘ';
  infoBtn.title = `View ${provider.name} details`;
  infoBtn.setAttribute('aria-label', `View ${provider.name} details`);
  infoBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showProviderModal(allProviders, provider.id);
  });

  chip.appendChild(nameSpan);
  chip.appendChild(modalitiesSpan);
  chip.appendChild(infoBtn);

  return chip;
}

