import Notiflix from 'notiflix';
export default function parseStorage(storageKey) {
  try {
    return JSON.parse(localStorage.getItem(storageKey));
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure(`${error}`);
  }
}
