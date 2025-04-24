const faqModal = document.getElementById('faqModal');
const faqTrigger = document.querySelector('.faq-link');
const closeButton = document.querySelector('.close-button');

faqTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  faqModal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  faqModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === faqModal) {
    faqModal.style.display = 'none';
  }
});

const tipsModal = document.getElementById('tipsModal');
const tipsTrigger = document.getElementById('tipsTrigger');
const tipsCloseButton = document.querySelector('.tips-close');

tipsTrigger.addEventListener('click', (event) => {
  event.preventDefault();
  tipsModal.style.display = 'block';
});

tipsCloseButton.addEventListener('click', () => {
  tipsModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === tipsModal) {
    tipsModal.style.display = 'none';
  }
});
