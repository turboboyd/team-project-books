export const loaderEl = document.querySelector('.loader-wrapper');

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}
