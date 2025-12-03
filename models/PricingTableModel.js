import { MODALITY_ORDER } from '../data/constants.js';

/**
 * Core pricing model managing providers, usage, selections, and cost calculations
 */
export class PricingTableModel {
  constructor(providers, usage, qualityMultipliers = {}) {
    this.providers = providers;
    this.usage = usage;
    this.qualityMultipliers = qualityMultipliers;
    this.selections = this.createEmptySelections();
  }

  createEmptySelections() {
    return MODALITY_ORDER.reduce((acc, modality) => {
      acc[modality] = new Set();
      return acc;
    }, {});
  }

  setUsage(usage) {
    this.usage = usage;
  }

  setQualityMultipliers(multipliers) {
    this.qualityMultipliers = multipliers;
  }

  getQualityMultiplier(modality) {
    return this.qualityMultipliers[modality] || 1.0;
  }

  getRows(modality) {
    const units = this.usage[modality];
    if (!units || !this.selections[modality]) return [];

    const qualityMultiplier = this.getQualityMultiplier(modality);

    return this.providers
      .filter(p => p.pricing && p.pricing[modality] != null)
      .map(p => {
        const basePricePerUnit = p.pricing[modality];
        const adjustedPricePerUnit = basePricePerUnit * qualityMultiplier;
        const cost = units * adjustedPricePerUnit;
        const selected = this.selections[modality].has(p.id);
        return {
          providerId: p.id,
          providerName: p.name,
          modality,
          units,
          pricePerUnit: adjustedPricePerUnit,
          basePricePerUnit,
          qualityMultiplier,
          cost,
          apiUrl: p.apiUrl,
          selected
        };
      })
      .sort((a, b) => a.cost - b.cost);
  }

  toggleSelection(modality, providerId) {
    const set = this.selections[modality];
    if (set.has(providerId)) {
      set.delete(providerId);
    } else {
      set.add(providerId);
    }
  }

  clearSelections() {
    MODALITY_ORDER.forEach(modality => this.selections[modality].clear());
  }

  getSelectedCostsByModality() {
    return MODALITY_ORDER.reduce((result, modality) => {
      const units = this.usage[modality] || 0;
      const selectedIds = this.selections[modality];
      const qualityMultiplier = this.getQualityMultiplier(modality);
      
      result[modality] = this.providers
        .filter(p => p.pricing && selectedIds.has(p.id) && p.pricing[modality] != null)
        .reduce((sum, p) => sum + (units * p.pricing[modality] * qualityMultiplier), 0);
      
      return result;
    }, {});
  }

  getGrandTotal() {
    const breakdown = this.getSelectedCostsByModality();
    return Object.values(breakdown).reduce((sum, cost) => sum + cost, 0);
  }
}

