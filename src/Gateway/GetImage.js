const BASE_URL = 'http://httpbin.org/image/png';

const getImage = async () => {
  return await fetch(BASE_URL).then((response) => response);

  // .then((img) => img);
};

export default getImage;
