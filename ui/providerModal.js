/**
 * Provider details modal with slideshow functionality
 */

import {
  createModalHeader,
  createSection,
  createPricingSection,
  createTextContent,
  createList,
  createUseCaseTags,
  createResourcesSection,
  createModalFooter
} from './modalRenderers.js';
import { createCodeSection } from './codeSection.js';

const ModalState = {
  providers: [],
  index: 0,
  element: null,
  keyboardHandler: null
};

export function initProviderModal() {
  if (!ModalState.element) {
    createModalDOM();
  }
}

export function showProviderModal(providers, selectedProviderId) {
  if (!providers || providers.length === 0) {
    console.warn('No providers to display in modal');
    return;
  }
  
  ModalState.providers = providers;
  ModalState.index = providers.findIndex(p => p.id === selectedProviderId);
  if (ModalState.index === -1) ModalState.index = 0;
  
  if (!ModalState.element) createModalDOM();
  
  renderModalContent();
  ModalState.element.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
  attachKeyboardListener();
}

export function closeModal() {
  if (ModalState.element) {
    ModalState.element.classList.remove('modal-visible');
    document.body.style.overflow = '';
    detachKeyboardListener();
  }
}

function createModalDOM() {
  ModalState.element = document.createElement('div');
  ModalState.element.className = 'provider-modal-overlay';
  ModalState.element.innerHTML = `
    <div class="provider-modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <button class="modal-nav modal-nav-prev" aria-label="Previous">‹</button>
      <button class="modal-nav modal-nav-next" aria-label="Next">›</button>
      <div class="modal-body" id="modalBody"></div>
    </div>
  `;
  
  document.body.appendChild(ModalState.element);
  attachEventListeners();
}

function attachEventListeners() {
  ModalState.element.querySelector('.modal-close').addEventListener('click', closeModal);
  ModalState.element.querySelector('.modal-nav-prev').addEventListener('click', () => navigateModal(-1));
  ModalState.element.querySelector('.modal-nav-next').addEventListener('click', () => navigateModal(1));
  ModalState.element.addEventListener('click', (e) => {
    if (e.target === ModalState.element) closeModal();
  });
}

function navigateModal(direction) {
  ModalState.index = (ModalState.index + direction + ModalState.providers.length) % ModalState.providers.length;
  renderModalContent();
}

function attachKeyboardListener() {
  if (!ModalState.keyboardHandler) {
    ModalState.keyboardHandler = (e) => {
      if (!ModalState.element || !ModalState.element.classList.contains('modal-visible')) return;
      
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') navigateModal(-1);
      else if (e.key === 'ArrowRight') navigateModal(1);
    };
  }
  document.addEventListener('keydown', ModalState.keyboardHandler);
}

function detachKeyboardListener() {
  if (ModalState.keyboardHandler) {
    document.removeEventListener('keydown', ModalState.keyboardHandler);
  }
}

function renderModalContent() {
  const provider = ModalState.providers[ModalState.index];
  const modalBody = document.getElementById('modalBody');
  
  if (!provider || !modalBody) return;
  
  const details = provider.details || {};
  
  modalBody.innerHTML = '';
  
  const fragment = document.createDocumentFragment();
  fragment.appendChild(createModalHeader(provider, details));
  fragment.appendChild(createPricingSection(provider));
  
  if (details.description) {
    fragment.appendChild(createSection('Overview', createTextContent(details.description)));
  }
  
  if (details.features && details.features.length > 0) {
    fragment.appendChild(createSection('Key Features', createList(details.features, 'modal-feature-list')));
  }
  
  if (details.useCases && details.useCases.length > 0) {
    fragment.appendChild(createSection('Best For', createUseCaseTags(details.useCases)));
  }
  
  if (details.pros && details.pros.length > 0) {
    fragment.appendChild(createSection('Advantages', createList(details.pros, 'modal-pro-list')));
  }
  
  const codeSection = createCodeSection(provider);
  if (codeSection) {
    fragment.appendChild(codeSection);
  }
  
  fragment.appendChild(createResourcesSection(provider, details));
  fragment.appendChild(createModalFooter(ModalState.index, ModalState.providers.length));
  
  modalBody.appendChild(fragment);
}
