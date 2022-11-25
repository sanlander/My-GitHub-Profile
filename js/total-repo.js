import { fetchApi } from "./github-api.js";
import { refs } from "./refs.js";
import { loaderOff } from "./visually-hidden.js";

export const totalRerositories = () => {
  try {
    fetchApi().then((r) => {
      refs.totalRepoDiv.innerHTML = `${r.length} repositories`;
    });
  } catch (error) {
    refs.totalRepoDiv.innerHTML = `Repositoreis not found.`;
  } finally {
    loaderOff();
  }
};
