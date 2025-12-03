/**
 * Code Section Renderer for Modal
 * Displays API code examples with copy functionality
 */

import { getProviderCodeExample } from '../data/codeExamples.js';

export function createCodeSection(provider) {
  const codeExample = getProviderCodeExample(provider.id);
  
  if (!codeExample) return null;
  
  const section = document.createElement('div');
  section.className = 'modal-section';
  
  const header = document.createElement('div');
  header.className = 'modal-section-title-with-action';
  
  const title = document.createElement('div');
  title.className = 'modal-section-title';
  title.textContent = 'Quick Start Code';
  
  const copyButton = createCopyButton(codeExample);
  
  header.appendChild(title);
  header.appendChild(copyButton);
  
  const codeBlock = document.createElement('pre');
  codeBlock.className = 'code-block';
  
  const code = document.createElement('code');
  code.className = 'code-content';
  code.textContent = codeExample;
  
  codeBlock.appendChild(code);
  section.appendChild(header);
  section.appendChild(codeBlock);
  
  return section;
}

function createCopyButton(codeExample) {
  const copyButton = document.createElement('button');
  copyButton.className = 'code-copy-button';
  copyButton.textContent = 'Copy';
  copyButton.title = 'Copy code to clipboard';
  
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(codeExample).then(() => {
      copyButton.textContent = 'Copied!';
      copyButton.classList.add('copied');
      setTimeout(() => {
        copyButton.textContent = 'Copy';
        copyButton.classList.remove('copied');
      }, 2000);
    }).catch((err) => {
      console.error('Failed to copy:', err);
      copyButton.textContent = 'Failed';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000);
    });
  });
  
  return copyButton;
}

