import { refs } from "./refs.js";

export const loadingOn = () => {
  refs.loading.classList.remove("visually-hidden");
};
export const loadingOff = () => {
  refs.loading.classList.add("visually-hidden");
};

export const loaderOff = () => {
  refs.loader.classList.add("visually-hidden");
};
