/**
 * Modal content rendering functions
 * Extracted for better organization and to keep files under 200 lines
 */

import { getProviderLogo } from '../data/providerLogos.js';
import { getProviderModality, getModalityColors } from '../data/modalityColors.js';
import { createFallbackLogoElement } from '../utils/logoGenerator.js';

export function createModalHeader(provider, details) {
  const modality = getProviderModality(provider);
  const colors = getModalityColors(modality);
  
  const header = document.createElement('div');
  header.className = 'modal-header';
  header.style.setProperty('--modality-color', colors.primary);
  header.style.setProperty('--modality-gradient', colors.gradient);
  
  const headerTop = document.createElement('div');
  headerTop.className = 'modal-header-top';
  
  // Try to load logo, use fallback if fails
  const logoUrl = getProviderLogo(provider.id);
  let logoElement;
  
  if (logoUrl) {
    logoElement = document.createElement('img');
    logoElement.src = logoUrl;
    logoElement.alt = `${provider.name} logo`;
    logoElement.className = 'modal-provider-logo';
    
    // Replace with fallback if logo fails to load
    logoElement.onerror = function() {
      const fallback = createFallbackLogoElement(provider.name, modality);
      this.replaceWith(fallback);
    };
  } else {
    // No logo URL, use fallback immediately
    logoElement = createFallbackLogoElement(provider.name, modality);
  }
  
  headerTop.appendChild(logoElement);
  
  const headerText = document.createElement('div');
  headerText.className = 'modal-header-text';
  
  const name = document.createElement('div');
  name.className = 'modal-provider-name';
  name.textContent = provider.name;
  
  const subtitle = document.createElement('div');
  subtitle.className = 'modal-provider-subtitle';
  subtitle.textContent = details.subtitle || provider.pricingUnits[Object.keys(provider.pricing)[0]];
  
  // Add modality badge
  const modalityBadge = document.createElement('div');
  modalityBadge.className = 'modal-modality-badge';
  modalityBadge.textContent = colors.name;
  modalityBadge.style.background = colors.gradient;
  
  headerText.appendChild(name);
  headerText.appendChild(subtitle);
  headerText.appendChild(modalityBadge);
  headerTop.appendChild(headerText);
  header.appendChild(headerTop);
  
  return header;
}

export function createSection(title, content) {
  const section = document.createElement('div');
  section.className = 'modal-section';
  
  const titleEl = document.createElement('div');
  titleEl.className = 'modal-section-title';
  titleEl.textContent = title;
  
  section.appendChild(titleEl);
  section.appendChild(content);
  return section;
}

export function createPricingSection(provider) {
  const section = document.createElement('div');
  section.className = 'modal-section';
  
  const title = document.createElement('div');
  title.className = 'modal-section-title';
  title.textContent = 'Pricing';
  
  const grid = document.createElement('div');
  grid.className = 'modal-pricing-grid';
  
  Object.keys(provider.pricing).forEach(mod => {
    grid.appendChild(createPricingItem(mod, provider.pricing[mod], provider.pricingUnits[mod]));
  });
  
  section.appendChild(title);
  section.appendChild(grid);
  return section;
}

function createPricingItem(modality, price, unit) {
  const item = document.createElement('div');
  item.className = 'modal-pricing-item';
  
  const label = document.createElement('div');
  label.className = 'modal-pricing-label';
  label.textContent = modality.toUpperCase();
  
  const value = document.createElement('div');
  value.className = 'modal-pricing-value';
  value.textContent = `$${formatPrice(price)}`;
  
  const unitEl = document.createElement('div');
  unitEl.className = 'modal-pricing-unit';
  unitEl.textContent = unit;
  
  item.appendChild(label);
  item.appendChild(value);
  item.appendChild(unitEl);
  return item;
}

export function createTextContent(text) {
  const div = document.createElement('div');
  div.className = 'modal-text';
  div.textContent = text;
  return div;
}

export function createList(items, className) {
  const ul = document.createElement('ul');
  ul.className = className;
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  
  return ul;
}

export function createUseCaseTags(useCases) {
  const container = document.createElement('div');
  container.className = 'modal-use-cases';
  
  useCases.forEach(uc => {
    const tag = document.createElement('span');
    tag.className = 'use-case-tag';
    tag.textContent = uc;
    container.appendChild(tag);
  });
  
  return container;
}

export function createResourcesSection(provider, details) {
  const section = document.createElement('div');
  section.className = 'modal-section';
  
  const title = document.createElement('div');
  title.className = 'modal-section-title';
  title.textContent = 'Resources';
  
  const links = document.createElement('div');
  links.className = 'modal-links';
  
  links.appendChild(createResourceLink('📚 API Documentation', provider.apiUrl));
  
  if (details.docsUrl) {
    links.appendChild(createResourceLink('📖 Additional Docs', details.docsUrl));
  }
  
  section.appendChild(title);
  section.appendChild(links);
  return section;
}

function createResourceLink(text, url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.className = 'modal-link';
  link.textContent = text;
  return link;
}

export function createModalFooter(index, total) {
  const footer = document.createElement('div');
  footer.className = 'modal-footer';
  
  const counter = document.createElement('div');
  counter.className = 'modal-counter';
  counter.textContent = `${index + 1} of ${total}`;
  
  footer.appendChild(counter);
  return footer;
}

function formatPrice(price) {
  return price.toFixed(price < 0.01 ? 6 : 2);
}

