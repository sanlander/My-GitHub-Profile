import { refs } from "./refs.js";
import { newItem } from "./newRepo.js";
import { loadingOn, loadingOff } from "./visually-hidden.js";
import { fetchApi, fetchCommits } from "./github-api.js";
import { totalRerositories } from "./total-repo.js";
import { repoErrorMsg } from "./repo-error.js";

totalRerositories();

let repoList = [];

const onClickDetailRepo = (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  const repoName = e.target.closest("li").dataset.name;
  fetchCommits(repoName).then((r) => {
    const author = r[0].commit.author.name;
    const data = r[0].commit.author.date;

    const updateRepo = repoList.map((repo) => {
      if (repo.name === repoName) {
        return {
          ...repo,
          author,
          data,
        };
      }
      return repo;
    });
    repoList = [...updateRepo];
    renderRepo();
  });
};

const onClickBtnOpenRepo = async () => {
  loadingOn();

  try {
    await fetchApi().then((r) => {
      repoList = [...r];

      refs.btnOpenRepo.classList.add("visually-hidden");

      renderRepo();
    });
  } catch (error) {
    refs.repoList.innerHTML = repoErrorMsg();
  } finally {
    loadingOff();
  }
};

const renderRepo = () => {
  const repoItems = repoList.map(newItem).join("");
  refs.repoList.innerHTML = repoItems;
};

refs.btnOpenRepo.addEventListener("click", onClickBtnOpenRepo);
refs.repoList.addEventListener("click", onClickDetailRepo);
