const BASE_URL = 'https://api.github.com/users';

const GetReposList = async (userName, page) => {
  return await fetch(`${BASE_URL}/${userName}/repos?per_page=5&page=${page}`)
    .then((res) => res.json())
    .then((list) => {
      if (list.length > 0) {
        return list;
      } else {
        return [];
      }
    });
};

export default GetReposList;
