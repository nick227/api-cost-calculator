/**
 * Left panel event handlers and logic
 */
export function setupLeftPanel(elements, onUpdate) {
  const { imageCountInput, imageCheckbox, promptCheckbox, videoCheckbox, avatarCheckbox, voiceCheckbox, sttCheckbox, musicCheckbox, text3dCheckbox } = elements;

  imageCountInput.addEventListener('input', () => {
    normalizeImageInput(imageCountInput);
    onUpdate();
  });

  setupStepperButtons(imageCountInput, onUpdate);
  setupPipelineCheckboxes([imageCheckbox, promptCheckbox, videoCheckbox, avatarCheckbox, voiceCheckbox, sttCheckbox, musicCheckbox, text3dCheckbox], onUpdate);
}

function normalizeImageInput(input) {
  const value = Number(input.value || 0);
  if (isNaN(value) || value < 0) {
    input.value = '0';
  }
}

function setupStepperButtons(input, onUpdate) {
  document.querySelectorAll('.stepper-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = Number(btn.getAttribute('data-step') || 0);
      const current = Number(input.value || 0);
      const next = Math.max(0, current + step);
      input.value = String(next);
      onUpdate();
    });
  });
}

function setupPipelineCheckboxes(checkboxes, onUpdate) {
  checkboxes.forEach(cb => {
    cb.addEventListener('change', onUpdate);
  });
}

export function readUsageInputs(elements) {
  const { imageCountInput, imageCheckbox, promptCheckbox, videoCheckbox, avatarCheckbox, voiceCheckbox, sttCheckbox, musicCheckbox, text3dCheckbox } = elements;
  
  return {
    count: Number(imageCountInput.value || 0),
    useImage: imageCheckbox.checked,
    usePrompts: promptCheckbox.checked,
    useVideo: videoCheckbox.checked,
    useAvatar: avatarCheckbox.checked,
    useVoice: voiceCheckbox.checked,
    useSTT: sttCheckbox.checked,
    useMusic: musicCheckbox.checked,
    useText3D: text3dCheckbox.checked
  };
}

