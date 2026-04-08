editor.js
const STORAGE_KEY = 'tanter_gallery_urls';

const form = document.getElementById('galleryForm');

// При загрузке страницы заполняем поля тем, что уже сохранено
function fillFormFromStorage() {
  const json = localStorage.getItem(STORAGE_KEY);
  if (!json) return;

  let urls;
  try {
    urls = JSON.parse(json);
  } catch (e) {
    console.error('Ошибка JSON в localStorage', e);
    return;
  }

  const inputs = form.querySelectorAll('input[type="text"]');
  inputs.forEach((input, index) => {
    if (urls[index]) {
      input.value = urls[index];
    }
  });
}

fillFormFromStorage();

// При отправке формы сохраняем массив URL в localStorage
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input[type="text"]');
  const urls = Array.from(inputs).map(input => input.value.trim());

  localStorage.setItem(STORAGE_KEY, JSON.stringify(urls));

  alert('Галерея сохранена! Открой index.html и обнови страницу.');
});
