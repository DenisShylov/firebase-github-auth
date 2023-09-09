const BASE_URL = 'https://api.github.com/users';

const GetReposList = async (userName) => {
  return await fetch(`${BASE_URL}/${userName}/repos?per_page=5`)
    .then((res) => res.json())
    .then((list) => list);
};

export default GetReposList;
