const loaderEl = document.querySelector('.loader-wrapper');

export function showLoader() {
  return new Promise(resolve => {
    loaderEl.classList.remove('hidden');
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}
