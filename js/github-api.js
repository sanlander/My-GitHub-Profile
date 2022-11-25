export const fetchApi = () => {
  return fetch("https://api.github.com/users/sanlander/repos").then((r) =>
    r.json()
  );
};

export const fetchCommits = async (repo) => {
  return fetch(`https://api.github.com/repos/sanlander/${repo}/commits`).then(
    (r) => r.json()
  );
};
